<?php
declare(strict_types=0);
$baseDir=realpath(__DIR__).DIRECTORY_SEPARATOR;
$_SERVER['SERVER_SOFTWARE']='BOWINC';
$_SERVER['SERVER_SIGNATURE']='⋈';
define('AVM_VERSION','1.1.4');
define('AVM_OS','BOW OS');
define('AVM_PROTO','avm://');
define('AVM_FS',$baseDir);
define('AVM_PROGRAM','APL');
define('AVM_PROGRAM_VERSION','1.1.0');
define('AVM_SERVER_APPLICATION','BOWINC');
define('BOW_BASE_PATH',AVM_FS.".avm".DIRECTORY_SEPARATOR.".bow".DIRECTORY_SEPARATOR);
define('BOW_CONNECTION_TIMEOUT',3600);
define('BOW_PRESERVE_CASE',true);

class Afocha{	
    public $proto;
    public $host;
    public $port;
	protected $user;
    protected $pass;
    private $config=[];

    const pubkey="034fe512ffa59ca66586685759652b303a1c22420656aeb90715d17445b25061ac";
    const address="1NN8sMFFQDcLmM2jYoRqzjkvqin79XrnW6";

	function __construct($config=null){
        if(!is_null($config)){
            $this->config=$config;
            if(isset($this->config['crt'])){
              $this->setCa($this->config['crt']);
            }
        }
	}

    public static function post_request($url,$data,$headers) {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);

        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        $contents = curl_exec($ch);
        curl_close($ch);
        return $contents;
    }


    public function setCa($crt)   {
        $cert = BOW_BASE_PATH."cert.pem";
        $this->config['temp']['ca'] = $crt;

        if (!file_exists(BOW_BASE_PATH)){
            if(mkdir(BOW_BASE_PATH)){
                file_put_contents($cert,$crt);
                $a = fopen($cert,'r');
            }
            else{
                $a= fopen($cert, 'r');
            }
            
            $b = fread($a, filesize($cert));        
            self::$config['ca'] = $b;
             return true;
         }
         return false;
    }

    public function dropCa($crt){
        $data = BOW_BASE_PATH."cert.pem";
        if (file_exists($data))
            $a = file_get_contents($data);
            $b = str_replace($crt, "", $a);
            if(file_put_contents($data,$b))
                return true;

        return false;
    }

    /**
     * Gets CA file from config.
     *
     * @return string|null
     */
    public static function getCa(){
        if (isset(self::$config['ca']) && is_file($this->config['ca'])) {
            return self::$config['ca'];
        }

        return null;
    }

     static function _int8($i) {
        return is_int($i) ? pack("c", $i) : unpack("c", $i)[1];
    }

    public static function _uInt8($i) {
        return is_int($i) ? pack("C", $i) : unpack("C", $i)[1];
    }

    public static function _int16($i) {
        return is_int($i) ? pack("s", $i) : unpack("s", $i)[1];
    }

    public static function _uInt16($i, $endianness=false) {
		$f = is_int($i) ? "pack" : "unpack";
		if ($endianness === true) {
		    $i = $f("n", $i);
		}
		else if ($endianness === false) {
		    $i = $f("v", $i);
		}
		else if ($endianness === null) { 
		    $i = $f("S", $i);
		}
	    return is_array($i) ? $i[1] : $i;
	}

    public static function _int32($i) {
        return is_int($i) ? pack("l", $i) : unpack("l", $i)[1];
    }

    public static function _uInt32($i, $endianness=false) {
        $f = is_int($i) ? "pack" : "unpack";
        if ($endianness === true) {  // big-endian
            $i = $f("N", $i);
        }
        else if ($endianness === false) {  // little-endian
            $i = $f("V", $i);
        }
        else if ($endianness === null) {  // machine byte order
            $i = $f("L", $i);
        }
        return is_array($i) ? $i[1] : $i;
    }

    public static function _int64($i) {
        return is_int($i) ? pack("q", $i) : unpack("q", $i)[1];
    }
    public static function _uInt64($i, $endianness=false) {
        $f = is_int($i) ? "pack" : "unpack";
        if ($endianness === true) {  // big-endian
            $i = $f("J", $i);
        }
        else if ($endianness === false) {  // little-endian
            $i = $f("P", $i);
        }
        else if ($endianness === null) {  // machine byte order
            $i = $f("Q", $i);
        }
        return is_array($i) ? $i[1] : $i;
    }

	/**
     * trigger AVM error
     * @param string $error_msg
     * @param constant $error_type
     */
    function _trigger_error($error_msg, $error_type = E_USER_WARNING, $print_debug = false)
    {
        if($error_type !== E_USER_WARNING && isset($error_msg)) {
        	$this->log_error['msg'] = $error_msg;
        	$this->log_error['time'] = microtime(true);
        	$this->log_error['agent'] = $_SERVER['HTTP_USER_AGENT'];
        	$this->log_error['checksum'] = hash('ripemd160', $this->log_error['time'].$this->log_error['agent'].$this->log_error['msg']);

        	if ($print_debug) {
        		return $this->log_error;
        	}

        	return $error_msg;
        }else {
        	trigger_error("AVM error: $error_msg", $error_type);
        }
    }

    public static function _unhash($data,$key){
        $bit = '';
        $l = strtoupper(hash('sha256', $key));
        $j = 0;
        for($i=0;$i<strlen($data);$i+=2){
            if (strlen($l)==$j+10) {
                $j=0;
            }
            $a = hexdec(substr($data, $i, 2));
            $bit .= chr($a ^ ord(substr($l, $j, 1)));
            ++$j;
        }
        return $data;
    }

    public static function _hash($data,$key){
        $bit ='';
        $l = strtoupper(hash('sha256', $key));
        $j = 0;
        for($i=0;$i<strlen($data); ++$i){
            if (strlen($l)==$j+10) {
                $j = 0;
            }

            $bit .= sprintf('%02x', ord(substr($data, $i, 1))^ord(substr($l, $j, 1)));
            ++$j;
        }
        return $bit;
    }

  	public static function avm($path, $title=null){
	  	header('Content-Type: application/vnd.afocha.avm+xml');
	  	if (!is_null($title)) {
	        header('Content-Disposition: attachment; filename="'.$title.'"');
	    }
	    readfile($path);
  	}

    /**
     * ctype is the content-type via avm protocol
     * @param string $data
     * @param string $ctype
     * @param string $name
     * @return object
     */
    public static function compileto_avm_app($name,$ext,$data){
        $fileName = $name.'.'.$ext;
        $size = strlen($data);
        $d = "data:";
        $d .= self::_ctype($ext);
        $d .= ";base64,";
        $bit = base64_encode($data);
        $file = $d.$bit;

        if (!empty($name)) {
            header("Content-Disposition: inline; filename='$fileName'");
        }
        return $file;
    }

    public static function _ctype($ext = '') {
    $mimes = array(
      'ai'    =>  'application/postscript',
      'aif'   =>  'audio/x-aiff',
      'aifc'  =>  'audio/x-aiff',
      'aiff'  =>  'audio/x-aiff',
      'ap'    =>  'application/vnd.afocha.vm+xml',
      'apl'   =>  'application/vnd.afocha.vm+xml',
      'avi'   =>  'video/x-msvideo',
      'avm'   =>  'application/octet-stream',
      'bin'   =>  'application/macbinary',
      'bow'   =>  'text/xml',
      'bmp'   =>  'image/bmp',
      'class' =>  'application/octet-stream',
      'cpt'   =>  'application/mac-compactpro',
      'css'   =>  'text/css',
      'dcr'   =>  'application/x-director',
      'dir'   =>  'application/x-director',
      'dll'   =>  'application/octet-stream',
      'dms'   =>  'application/octet-stream',
      'doc'   =>  'application/msword',
      'dvi'   =>  'application/x-dvi',
      'dxr'   =>  'application/x-director',
      'eml'   =>  'message/rfc822',
      'eps'   =>  'application/postscript',
      'exe'   =>  'application/octet-stream',
      'gif'   =>  'image/gif',
      'gtar'  =>  'application/x-gtar',
      'htm'   =>  'text/html',
      'html'  =>  'text/html',
      'jpe'   =>  'image/jpeg',
      'jpeg'  =>  'image/jpeg',
      'jpg'   =>  'image/jpeg',
      'hqx'   =>  'application/mac-binhex40',
      'js'    =>  'application/x-javascript',
      'lha'   =>  'application/octet-stream',
      'log'   =>  'text/plain',
      'lzh'   =>  'application/octet-stream',
      'mid'   =>  'audio/midi',
      'midi'  =>  'audio/midi',
      'mif'   =>  'application/vnd.mif',
      'mov'   =>  'video/quicktime',
      'movie' =>  'video/x-sgi-movie',
      'mp2'   =>  'audio/mpeg',
      'mp3'   =>  'audio/mpeg',
      'mpe'   =>  'video/mpeg',
      'mpeg'  =>  'video/mpeg',
      'mpg'   =>  'video/mpeg',
      'mpga'  =>  'audio/mpeg',
      'oda'   =>  'application/oda',
      'pdf'   =>  'application/pdf',
      'php'   =>  'application/x-httpd-php',
      'php3'  =>  'application/x-httpd-php',
      'php4'  =>  'application/x-httpd-php',
      'phps'  =>  'application/x-httpd-php-source',
      'phtml' =>  'application/x-httpd-php',
      'png'   =>  'image/png',
      'ppt'   =>  'application/vnd.ms-powerpoint',
      'ps'    =>  'application/postscript',
      'psd'   =>  'application/octet-stream',
      'qt'    =>  'video/quicktime',
      'ra'    =>  'audio/x-realaudio',
      'ram'   =>  'audio/x-pn-realaudio',
      'rm'    =>  'audio/x-pn-realaudio',
      'rpm'   =>  'audio/x-pn-realaudio-plugin',
      'rtf'   =>  'text/rtf',
      'rtx'   =>  'text/richtext',
      'rv'    =>  'video/vnd.rn-realvideo',
      'sea'   =>  'application/octet-stream',
      'shtml' =>  'text/html',
      'sit'   =>  'application/x-stuffit',
      'so'    =>  'application/octet-stream',
      'smi'   =>  'application/smil',
      'smil'  =>  'application/smil',
      'swf'   =>  'application/x-shockwave-flash',
      'tar'   =>  'application/x-tar',
      'text'  =>  'text/plain',
      'txt'   =>  'text/plain',
      'tgz'   =>  'application/x-tar',
      'tif'   =>  'image/tiff',
      'tiff'  =>  'image/tiff',
      'wav'   =>  'audio/x-wav',
      'wbxml' =>  'application/vnd.wap.wbxml',
      'wmlc'  =>  'application/vnd.wap.wmlc',
      'word'  =>  'application/msword',
      'xht'   =>  'application/xhtml+xml',
      'xhtml' =>  'application/xhtml+xml',
      'xl'    =>  'application/excel',
      'xls'   =>  'application/vnd.ms-excel',
      'xml'   =>  'text/xml',
      'xsl'   =>  'text/xml',
      'zip'   =>  'application/zip'
    );
    return ( ! isset($mimes[strtolower($ext)])) ? 'application/octet-stream' : $mimes[strtolower($ext)];
  }

  	public static function no_cache(){
  		header("Cache-Control: no-cache, must-revalidate");
    	header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
  	}

    public static function mirrow($string,int $bits=null) {
        $pac = 2;
        if (!is_null($bits)) {
            $pac = $bits;
        }

        $c = '';
        $l = strlen($string);
        $r = $l % $pac;

        if ($r>0) {
            $l = $l+1;
            $string = self::avm_pad($string,$l);
        }
        for ($i=0; $i <$l; $i+=2) { 
            $a = $l-$i;
            $c .= substr($string, $a-2, 2);
        }
        return $c;
    }


    /**
     *Pad string to a legnth  
     * @param string $param
     * @param int $len
     */
    public static function fpad($param,$len,$direction=null,$cell=null)
    {
        if (!is_null($cell)) {
            $bp = $cell;
        }else{
            $bp = '0';
        }
        switch ($direction) {
            case '>':
                $p = STR_PAD_RIGHT;
                break;

            case '<':
                    $p = STR_PAD_LEFT;
                    break;

            case '<>':
                $p = STR_PAD_BOTH;
                break;
            
            default:
                $p = STR_PAD_LEFT;
                break;
        }

        $r = str_pad(strval($param),$len,$bp,$p);
        return $r;
    }

  	/**
	 *Pad string to a legnth  
	 * @param string $param
	 * @param int $len
	 */
  	public static function avm_pad($param,$len,$direction=null)
    {
       	switch ($direction) {
    		case 'right':
    			$p = STR_PAD_RIGHT;
    			break;

    		case 'left':
    				$p = STR_PAD_LEFT;
    				break;

    		case 'both':
    			$p = STR_PAD_BOTH;
    			break;
    		
    		default:
    			$p = STR_PAD_LEFT;
    			break;
    	}

    	$r = str_pad(strval($param),$len,"0",$p);
    	return $r;
    }

    public static function _text2dec($string){
        $l = strlen($string);
        $r = "";
        for($i=0;$i<$l;++$i){
           $r .= ord(substr($string, $i, 1));
        }
        return $r;
    }
    public static function _text2byte($string){
        $l = strlen($string);
        $r = "";
        for($i=0;$i<$l;++$i){
           $r .= chr(ord(substr($string, $i, $i+1)));
        }
        return $r;
    }

    public static function _text2hex($string){
        $l = strlen($string);
        $added = 0;
        $r = "";
        for($i=0;$i<$l;++$i){
           $r .= bin2hex(chr(ord(substr($string, $i, $i+1))));
        }
        return $r;
    }

    /**
     * Hexadecimal to string
     *
     * @param string $hex
     * @return string
     */
    static function hex2str($hex) {
        return pack('H*', str_replace(array("\r", "\n", ' '), '', $hex));
    }
    
    /**
     * String to hexadecimal
     *
     * @param string $str
     * @return string
     */
    static function str2hex($str) {
        return current(unpack('H*', $str));
    }

    static function isEven($str) {
        return (((int)$str[strlen($str)-1]) & 1) == 0;
    }

    /**
	 *Get a serial number for a new device
	 * @return string avm_serial_number
	 */
    public static function avm_stamp_sn(){
        $tn = time();
        $s1 = (int) date("s", $tn);
        $s2 = (int) date("i", $tn)+$s1;
        $s3 = (int) date("H", $tn)+$s2;
        $h1 = (int) date("d", $tn)+$s3;
        $h2 = (int) date("d", $tn);
        $h3 = (int) date("m", $tn);
        $h3 = self::avm_pad(dechex($h3),2);
        $h4 = (int) date("Y", time());
        $h4 = self::avm_pad(dechex($h4),4);
        $hj = dechex((int)(($s1+$s2+$s3+$h1)/4));
        $salt = openssl_random_pseudo_bytes(3);
        $salt = bin2hex($salt);
        $cap = openssl_random_pseudo_bytes(1);
        $cap = bin2hex($cap);
        $mcs = openssl_random_pseudo_bytes(2);
        $mcs = bin2hex($mcs);
        $hk = $cap.self::avm_pad(dechex($s3),2).self::avm_pad($h4, 4)."-".self::avm_pad(dechex($s2), 2).self::avm_pad($h3, 2)."-".self::avm_pad(dechex($s1),2).self::avm_pad(dechex($h2),2)."-".self::avm_pad($mcs, 4)."-".self::avm_pad($hj, 2).self::avm_pad($h2, 2).self::avm_pad(dechex($h1), 2).$salt;
        return strtoupper($hk);
    }

    /**
     * Verify AVM Serial Number ID
     * @param string Serial Number ID $sn
     * @return string response 
     */
    private static function avm_verify_sn($sn){
    	$rest = [];
        $maxlen = strlen(self::avm_stamp_sn());
        if (strlen($sn)!==$maxlen) {
            $rest['SN_BOOL'] = false;
            $rest['SN_ISVALID'] = "INVALID";
            return $rest;
        }

    	if (empty($sn)) {
    		avm_trigger_error("SN ID can not be empty!, provide one and try again.");
    		return false;
    	}

    	$sd = sscanf($sn, "%2[ -~]%2[ -~]%4[ -~]-%2[ -~]%2[ -~]-%2[ -~]%2[ -~]-%4[ -~]-%2[ -~]%2[ -~]%2[ -~]%6[ -~]", $f0, $f1, $f2, $f3, $f4, $f5, $f6, $fn, $f7, $f8, $f9, $fa);
    	$nounce = floor((hexdec($f5)+hexdec($f3)+hexdec($f1)+hexdec($f9))/4);
    	$dif = hexdec($f7);
        $bool = floor($nounce/$dif);
    	if ($bool==1) {
    		$rest['SN_BOOL']=true;
    	}else{
    		$rest['SN_BOOL']=false;
    	}

    	if ($nounce==$dif) {
            $rest['SN_ISVALID'] = "VALID";
            $rest['SN_YEAR'] = hexdec($f2);
            $rest['SN_MONTH'] = hexdec($f4);
            $rest['SN_DAY'] = $f8;
            $rest['SN_HOUR'] = hexdec($f1)-hexdec($f3);
            $rest['SN_MIN'] = hexdec($f3)-hexdec($f5);
            $rest['SN_SEC'] = hexdec($f5);
            $rest['SN_DATE'] = strtotime($rest['SN_MONTH']."/".$rest['SN_DAY']."/".$rest['SN_YEAR'].", ".$rest['SN_HOUR'].":".$rest['SN_MIN'].":".$rest['SN_SEC']);
            $rest['SN_UID'] = self::avm_pad(hexdec($f0).hexdec($f7).hexdec($f9), 10, "right");
            $rest['SN_SN'] = $f0.$f1.$f2.$f3.$f4.$f5.$f6.$fn.$f7.$f8.$f9.$fa;
            $rest['SN_USER'] = "U".$f0.dechex(hexdec($f4)+hexdec($f6)).dechex(hexdec($f3)+hexdec($f5)).$fn;
    	}else{
    		$rest['SN_ISVALID'] = "INVALID";
    	}


    	return $rest;
    }

    public static function avm_sn_tell($sn, $param=null){
    	$what = "";
    	$failed = "Invalid";
    	$empty = NULL;

    	if(empty($sn)) return $empty;

    	if (is_null($param)) {
    		$what = 'SN_BOOL';
    	}else{
    		switch ($param) {
                case 'year':
                    $what = 'SN_YEAR';
                    break;
                case 'month':
                    $what = 'SN_MONTH';
                    break;
                case 'day':
                    $what = 'SN_DAY';
                    break;
                case 'hour':
                    $what = 'SN_HOUR';
                    break;
                case 'min':
                    $what = 'SN_MIN';
                    break;
                case 'sec':
                    $what = 'SN_SEC';
                    break;
    			case 'whois':
    				$what = 'SN_USER';
    				break;
    			case 'validity':
    				$what = 'SN_ISVALID';
    				break;
    			case 'stime':
    				$what = 'SN_DATE';
    				break;
    			case 'raw':
    				$what = 'SN_SN';
    				break;
    			case 'seed':
    				$what = 'SN_UID';
    				break;
    			
    			default:
    				$what = 'SN_BOOL';
    				break;
    		}
    	}

    	$tell = self::avm_verify_sn($sn);
    	return $tell[$what];
    }

    public static function htag($tag, $content) {
    	$rtn = "";
    	if(!isset($content)){
    		$rtn = '<'.$tag.'/>';
    	}else{
    		$o = '<'.$tag.'>';
        	$c = '</'.$tag.'>';
        	$rtn = $o.$content.$c;
    	}
        
        return $rtn;
    }

 	public static function adoc($file,$action){
 		if (isset($_POST['add_adf'])) {
            if (!empty($_POST['file'])) {
                $dpt = $_POST['file'];
                if (isset($_POST['action'])) {
                    switch ($_POST['action']) {
                        case 'read':
                            $dataxx = file_get_contents($dpt) or die("Unable to read file!");
                            break;
                        case 'write':
                            $dataxn = fopen($dpt, "w") or die("Unable to open file!");
                            fwrite($dataxn, $_POST['data']);
                            fclose($dataxn);
                            break;
                        
                        default:
                            $dataxx ="Write Document Here";
                            break;
                    }
                }
        
                if ($dpt) {
                    echo "<iframe src='".$dpt."' name='avm_screen' height='300px' width='100%' title='AVM Document preview'></iframe>";
                }
            }
        }
    }

    function is_bot() {
        $botlist = array("AfochaBot", "Teoma", "alexa", "froogle", "Gigabot", "inktomi", "looksmart", "URL_Spider_SQL", "Firefly", "NationalDirectory", "Ask Jeeves", "TECNOSEEK", "InfoSeek", "WebFindBot", "girafabot", "crawler", "www.galaxy.com", "Googlebot", "Scooter", "Slurp", "msnbot", "appie", "FAST", "WebBug", "Spade", "ZyBorg", "rabaz", "Baiduspider", "Feedfetcher-Google", "TechnoratiSnoop", "Rankivabot", "Mediapartners-Google", "Sogou web spider", "WebAlta Crawler","TweetmemeBot", "Butterfly","Twitturls","Me.dium","Twiceler");
        foreach($botlist as $bot) {
        if(strpos($_SERVER['HTTP_USER_AGENT'],$bot)!==false)
            return true;
        }
        return false;
    }

    function json($obj, $code = 200) {
      header('Content-type: application/json', true, $code);
      echo json_encode($obj);
      exit;
    }

    function client_ip() {
      if (isset($_SERVER['HTTP_CLIENT_IP']))
        return $_SERVER['HTTP_CLIENT_IP'];
      else if (isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        return $_SERVER['HTTP_X_FORWARDED_FOR'];    
      return $_SERVER['REMOTE_ADDR'];
    }

    function _u($str) {
      return urlencode($str);
    }
    
    function _h($str, $enc = 'UTF-8', $flags = ENT_QUOTES) {
      return htmlentities($str, $flags, $enc);
    }

    public static function convert_base($numberInput, $fromBaseInput, $toBaseInput){
         if ($fromBaseInput==$toBaseInput) return $numberInput;
         $fromBase = str_split($fromBaseInput,1);
         $toBase = str_split($toBaseInput,1);
         $number = str_split($numberInput,1);
         $fromLen=strlen($fromBaseInput);
         $toLen=strlen($toBaseInput);
         $numberLen=strlen($numberInput);
         $retval='';
         if ($toBaseInput == '0123456789')
         {
             $retval=0;
             for ($i = 1;$i <= $numberLen; $i++)
                 $retval = bcadd($retval, bcmul(array_search($number[$i-1], $fromBase),bcpow($fromLen,$numberLen-$i)));
             return $retval;
         }
         if ($fromBaseInput != '0123456789')
             $base10= self::convert_base($numberInput, $fromBaseInput, '0123456789');
         else
             $base10 = $numberInput;
         if ($base10<strlen($toBaseInput))
             return $toBase[$base10];
         while($base10 != '0')
         {
             $retval = $toBase[bcmod($base10,$toLen)].$retval;
             $base10 = bcdiv($base10,$toLen,0);
         }
         return $retval;
    }

    public static function from_to($data, $from, $to){
        $str = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz+/=-_.,:;|\%!$#&@?[{(<"`^>)}]⋈✇✑✒✏✎✐✜✾❖⛻⛋⚶⚞⚟⚙♾♦■□▢▣▤▥▦▧▨▩▪▫▬▭▮▯▰▱▲△▴▵▶▷▸▹►▻▼▽▾▿◀◁◂◃◄◅◆◇◈◉◊○◌◍◎●◐◑◒◓◔◕◖◗◘◙◚◛◜◝◞◟◠◡◢◣◤◥◦◧◨◩◪◫◬◭◮◯◰◱◲◳◴◵◶◷◸◹◺◻◼◽◾◿₠₡₢₣₤₥₦₧₨₩₪₫€₭₮₯₰₱₲₳₴₵₶₷₸₹₺₻₼₽₾₿'."'";
        $max = strlen($str);
        if ($from>$max || $to>$max) {
            return false;
        }

        if ($from=='16') {
            $data = strtoupper($data);
        }
        if ($from=='58') {
            $f_str = substr($str, 1, (int) $from);
        }else{
            $f_str = substr($str, 0,(int) $from);
        }

        if ($to=='58') {
            $t_str = substr($str, 1, $to);
        }else{
            $t_str = substr($str, 0, $to);
        }

        $ans = self::convert_base($data, $f_str, $t_str);

        if($to=='64'){
            $ans= base64_encode($data);
        }
        return $ans;
    }

    public static function hex2ipv4($hex){
        $len = 8;
        $bit = 2; 
        $al=4;
        $pl=4;
        $ip="";
        $port="";
        $v=0;
        $ipv4=array();

        if (strlen($hex)<$len) {
            $hex = self::avm_pad($hex,8);
        }
        if (strlen($hex)>$len) {
            $port = substr($hex, strlen($hex)-4, strlen($hex));
        }

        $ip = substr($hex, 0,$len); 
        
        for ($i=0;$i<$al;$i++) { 
            $ipv4[$i] = hexdec(substr($ip, $i,$bit));
        }
        $p = implode('.', $ipv4);

        if(!empty($port)){
            for ($o=0; $o < $pl ; $o++) { 
                $v += hexdec(substr($port, $o, $o+2));
            }
            $p .=":".$v;
        }
        return $p;
    }

    public static function to_significant_digits($number, $significant_digits) {
        if ($number === 0) return 0;
        $number_digits = floor(log10($number));
        $returnval = (pow(10, $number_digits - $significant_digits + 1)) * round($number/(pow(10, $number_digits - $significant_digits + 1)));
        return $returnval;
    }

    public static function format_bignum($number) {
        if ($number >= 0) $sign = "";
        else $sign = "-";
        
        $number = abs($number);
        if ($number > 1) $number = self::to_significant_digits($number, 5);
        
        if ($number >= pow(10, 9)) {
            return $sign.($number/pow(10, 9))."B";
        }
        else if ($number >= pow(10, 6)) {
            return $sign.($number/pow(10, 6))."M";
        }
        else if ($number > pow(10, 5)) {
            return $sign.($number/pow(10, 3))."k";
        }
        else return $sign.rtrim(rtrim(number_format(sprintf('%.8F', $number), 8), '0'), ".");
    }
    public static function round_to($number, $min_decimals, $target_sigfigs, $format_string) {
        $decimals = (int) ($target_sigfigs-1-floor(log10($number)));
        if ($min_decimals !== false) $decimals = max($min_decimals, $decimals);
        if ($format_string) return @number_format($number, $decimals);
        else return round($number, $decimals);
    }
    
    public static function format_percentage($number) {
        if ($number >= 50) $min_decimals = 0;
        else $min_decimals = 2;

        $max_decimals = 15;
        $number = self::to_significant_digits($number, $max_decimals-1);
        
        $decimal_places = $min_decimals;
        $keep_looping = true;
        do {
            $pow10 = pow(10, $decimal_places);
            if ((string)($number*$pow10) == (string)(round($number*$pow10))) {
                $keep_looping = false;
            }
            else $decimal_places++;
        }
        while ($keep_looping && $decimal_places < $max_decimals);
        
        return number_format($number, $decimal_places);
    }

    public static function format_size($size){
     $i=0;
     $iec = array("Byte", "KiloByte", "MegaByte", "GigaByte", "TeraByte","PetaByte","ExaByte","ZetaByte","YottaByte","XB","WB","VB");
     while (($size/1024)>1) {
         $size=$size/1024;
         $i++;}
     return(round($size,1)." ".$iec[$i]);
    } 

    
public static function addHex($a,$b,$dec=true){
  $ab = bcadd(\Afocha::from_to($a,'16','10'),\Afocha::from_to($b,'16','10'));
  if($dec){
    return $ab;
  }else{
    return \Afocha::from_to($ab,'10','16');
  }
}

public static function subHex($a,$b,$dec=true){
  $ab = bcsub(\Afocha::from_to($a,'16','10'),\Afocha::from_to($b,'16','10'));
  if($dec){
    return $ab;
  }else{
    return \Afocha::from_to($ab,'10','16');
  }
}

public static function divHex($a,$b,$dec=true){
  $ab = bcdiv(\Afocha::from_to($a,'16','10'),\Afocha::from_to($b,'16','10'));
  if($dec){
    return $ab;
  }else{
    return \Afocha::from_to($ab,'10','16');
  }
}

public static function mulHex($a,$b,$dec=true){
  $ab = bcmul(\Afocha::from_to($a,'16','10'),\Afocha::from_to($b,'16','10'));
  if($dec){
    return $ab;
  }else{
    return \Afocha::from_to($ab,'10','16');
  }
}

}
?>