<?php
namespace Masterchain;

/**
 * Generic math trait used by all other Masterchain classes.
 *
 * @author Hycent Afocha <hycent@afocha.org>
 */
trait Math
{
    /*
     * Elliptic curve parameters for secp256k1
     * http://www.secg.org/collateral/sec2_final.pdf
     */
    public $Inf = 'infinity';
    public $G   = '0479BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8';
    public $p   = '0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F';
    public $a   = '0x00';
    public $b   = '0x07';
    public $n   = '0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141';
    public $h   = '0x01';

    public $Gx  = '0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798';
    public $Gy  = '0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8';

    private $bytes     = array();
    private $math      = null;
    private $b58_chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    private $dec_chars = '0123456789';
    private $hex_chars = '0123456789abcdef';
    private $bin_chars = '01';

    /**
     * Set this to false if you want to disable the
     * various parameter checks to improve performance.
     * It could definitely break things if you don't
     * ensure the values are legitimate yourself, though!
     *
     * @var boolean
     */
    private $param_checking = true;

    /**
     * Multiplies two arbitrary precision numbers.
     *
     * @param  string $a  The first number to multiply.
     * @param  string $b  The second number to multiply.
     * @return string     The result of the operation.
     * @throws \Exception
     */
    public function Multiply($a, $b)
    {
        if ($this->param_checking == true) {
            if ($this->numberCheck($a) === false || $this->numberCheck($b) === false) {
                throw new \Exception('Empty or invalid parameters passed to Multiply() function.  Value received for first parameter was "' . var_export($a, true) . '" and second parameter was "' . var_export($b, true) . '".');
            }
        }

        if ($this->math == null) {
            $this->MathCheck();
        }

        return $this->math->mul($a, $b);
    }

    /**
     * Adds two arbitrary precision numbers.
     *
     * @param  string $a  The first number to add.
     * @param  string $b  The second number to add.
     * @return string     The result of the operation.
     * @throws \Exception
     */
    public function Add($a, $b)
    {
        if ($this->param_checking == true) {
            if ($this->numberCheck($a) === false || $this->numberCheck($b) === false) {
                throw new \Exception('Empty or invalid parameters passed to Add() function.  Value received for first parameter was "' . var_export($a, true) . '" and second parameter was "' . var_export($b, true) . '".');
            }
        }

        if ($this->math == null) {
            $this->MathCheck();
        }

        return $this->math->add($a, $b);
    }

    /**
     * Subtracts two arbitrary precision numbers.
     *
     * @param  string $a  The first number to Subtract.
     * @param  string $b  The second number to Subtract.
     * @return string     The result of the operation.
     * @throws \Exception
     */
    public function Subtract($a, $b)
    {
        if ($this->param_checking == true) {
            if ($this->numberCheck($a) === false || $this->numberCheck($b) === false) {
                throw new \Exception('Empty or invalid parameters passed to Subtract() function.  Value received for first parameter was "' . var_export($a, true) . '" and second parameter was "' . var_export($b, true) . '".');
            }
        }

        if ($this->math == null) {
            $this->MathCheck();
        }

        return $this->math->sub($a, $b);
    }

    /**
     * Divides two arbitrary precision numbers.
     *
     * @param  string $a  The first number to Divide.
     * @param  string $b  The second number to Divide.
     * @return string     The result of the operation.
     * @throws \Exception
     */
    public function Divide($a, $b)
    {
        if ($this->param_checking == true) {
            if ($this->numberCheck($a) === false || $this->numberCheck($b) === false) {
                throw new \Exception('Empty or invalid parameters passed to Divide() function.  Value received for first parameter was "' . var_export($a, true) . '" and second parameter was "' . var_export($b, true) . '".');
            }
        }

        if ($this->math == null) {
            $this->MathCheck();
        }

        return $this->math->div($a, $b);
    }

    /**
     * Performs the modulo 'b' of an arbitrary precision number 'a'.
     *
     * @param  string $a  The first number.
     * @param  string $b  The second number.
     * @return string     The result of the operation.
     * @throws \Exception
     */
    public function Modulo($a, $b)
    {
        if ($this->param_checking == true) {
            if ($this->numberCheck($a) === false || $this->numberCheck($b) === false) {
                throw new \Exception('Empty or invalid parameters passed to Modulo() function.  Value received for first parameter was "' . var_export($a, true) . '" and second parameter was "' . var_export($b, true) . '".');
            }
        }

        if ($this->math == null) {
            $this->MathCheck();
        }

        return $this->math->mod($a, $b);
    }

    /**
     * Performs the inverse modulo of two arbitrary precision numbers.
     *
     * @param  string $a  The first number to Divide.
     * @param  string $b  The second number to Divide.
     * @return string     The result of the operation.
     * @throws \Exception
     */
    public function Invert($a, $b)
    {
        if ($this->param_checking == true) {
            if ($this->numberCheck($a) === false || $this->numberCheck($b) === false) {
                throw new \Exception('Empty or invalid parameters passed to Invert() function.  Value received for first parameter was "' . var_export($a, true) . '" and second parameter was "' . var_export($b, true) . '".');
            }
        }

        if ($this->math == null) {
            $this->MathCheck();
        }

        return $this->math->inv($a, $b);
    }

    /**
     * Compares two arbitrary precision numbers.
     *
     * @param  string $a  The first number to compare.
     * @param  string $b  The second number to compare.
     * @return string     The result of the comparison.
     * @throws \Exception
     */
    public function Compare($a, $b)
    {
        if ($this->param_checking == true) {
            if ($this->numberCheck($a) === false || $this->numberCheck($b) === false) {
                throw new \Exception('Empty or invalid parameters passed to Compare() function.  Value received for first parameter was "' . var_export($a, true) . '" and second parameter was "' . var_export($b, true) . '".');
            }
        }

        if ($this->math == null) {
            $this->MathCheck();
        }

        return $this->math->comp($a, $b);
    }

    /**
     * Raises an arbitrary precision number to an integer power.
     *
     * @param  string $a  The number to raise to the power.
     * @param  string $b  The integer power
     * @return string     The result of the operation.
     * @throws \Exception
     */
    public function Power($a, $b)
    {
        if ($this->param_checking == true) {
            if ($this->numberCheck($a) === false || $this->numberCheck($b) === false) {
                throw new \Exception('Empty or invalid parameters passed to Power() function.  Value received for first parameter was "' . var_export($a, true) . '" and second parameter was "' . var_export($b, true) . '".');
            }
        }

        if ($this->math == null) {
            $this->MathCheck();
        }

        return $this->math->power($a, $b);
    }

    /**
     * Encodes a decimal value into hexadecimal.
     *
     * @param  string     $dec    The decimal value to convert.
     * @param  boolean    $prefix Whether or not to append the '0x'.
     * @return string     $hex    The result of the conversion.
     * @throws \Exception
     */
    public function encodeHex($dec, $prefix = true)
    {
        if ($this->param_checking == true) {
            if ($this->numberCheck($dec) === false) {
                throw new \Exception('Empty or invalid decimal parameter passed to encodeHex function.  Value received was "' . var_export($dec, true) . '".');
            }
        }

        if ($this->math == null) {
            $this->MathCheck();
        }

        $dec = strtolower(trim($dec));

        if (substr($dec, 0, 1) == '-') {
            $dec = substr($dec, 1);
        }

        if ($this->Test($dec) == 'hex') {
            if (substr($dec, 0, 2) != '0x') {
                return '0x' . $dec;
            } else {
                return $dec;
            }
        }

        $digits = $this->hex_chars;

        $hex = '';

        while ($this->math->comp($dec, '0') > 0) {
            $qq  = $this->math->div($dec, '16');
            $rem = $this->math->mod($dec, '16');
            $dec = $qq;
            $hex = $hex . $digits[$rem];
        }

        $hex = strrev($hex);

        if ($prefix === true) {
            return '0x' . $hex;
        } else {
            return $hex;
        }
    }

    /**
     * Decodes a hexadecimal value into decimal.
     *
     * @param  string     $hex
     * @return string     $dec
     * @throws \Exception
     */
    public function decodeHex($hex)
    {
        if ($this->param_checking == true) {
            if ($this->numberCheck($hex) === false) {
                throw new \Exception('Argument must be a string of hex digits.  Value received was "' . var_export($hex, true) . '".');
            }
        }

        if ($this->math == null) {
            $this->MathCheck();
        }

        $hex = strtolower(trim($hex));

        if ($this->Test($hex) == 'dec') {
            return $hex;
        }

        if (substr($hex, 0, 2) == '0x') {
            $hex = substr($hex, 2);
        }

        $hex_len = strlen($hex);

        for ($dec = '0', $i = 0; $i < $hex_len; $i++) {
            $current = stripos($this->hex_chars, $hex[$i]);
            $dec     = $this->math->add($this->math->mul($dec, '16'), $current);
        }

        return $dec;
    }

    /**
     * Returns the appropriate base digit string/array for the
     * requested base parameter.
     *
     * @param  string       $base  The base requested.
     * @return array|string        The base character info.
     * @throws \Exception
     */
    public function BaseCheck($base)
    {
        if ($this->param_checking == true) {
            if (false === isset($base) || true === empty($base)) {
                throw new \Exception('Empty base parameter passed to BaseCheck() function.  Value received was "' . var_export($base, true) . '".');
            }
        }

        switch ($base) {
            case '256':
                return $this->GenBytes();
            case '16':
                return $this->hex_chars;
            case '58':
                return $this->b58_chars;
            case '2':
                return $this->bin_chars;
            case '10':
                return $this->dec_chars;
            default:
                throw new \Exception('Unknown base parameter passed to BaseCheck() function.  Value received was "' . var_export($base, true) . '".');
        }
    }

    /**
     * This method returns a binary string representation of
     * the decimal number.  Used for the doubleAndAdd() method.
     *
     * @param  string     $num The number to convert.
     * @return string     $bin The converted number.
     * @throws \Exception
     */
    public function D2B($num)
    {
        if ($this->param_checking == true) {
            if ($this->numberCheck($num) === false) {
                throw new \Exception('Missing or invalid number parameter passed to the D2B() function.  Value received was "' . var_export($num, true) . '".');
            }
        }

        if ($this->math == null) {
            $this->MathCheck();
        }

        $num = strtolower(trim($num));

        if ($this->Test($num) == 'hex') {
            $num = $this->decodeHex($num);
        }

        try {
            $bin = '';

            while ($this->math->comp($num, '0') > 0) {
                if ($this->math->mod($num, '2') == '1') {
                    $bin .= '1';
                } else {
                    $bin .= '0';
                }

                $num = $this->math->div($num, '2');
            }
        } catch (\Exception $e) {
            throw $e;
        }

        return $bin;
    }

    /**
     * Converts hex value into octet (byte) string.
     *
     * @param  string     $hex
     * @return string
     * @throws \Exception
     */
    public function binConv($hex)
    {
        if ($this->param_checking == true) {
            if ($this->numberCheck($hex) === false) {
                throw new \Exception('Missing or invalid number parameter passed to the binConv() function.  Value received was "' . var_export($hex, true) . '".');
            }
        }

        if ($this->math == null) {
            $this->MathCheck();
        }

        $hex     = strtolower(trim($hex));
        $digits  = $this->BaseCheck('256');

        switch ($this->Test($hex)) {
            case 'dec':
                $hex = $this->encodeHex($hex);
                break;
            case 'hex':
                if ($hex[0] . $hex[1] != '0x') {
                    $hex = '0x' . $hex;
                }
                break;
            default:
                throw new \Exception('Unknown data type passed to the binConv() function.  Value received was "' . var_export($hex, true) . '".');
        }

        $byte = '';

        while ($this->math->comp($hex, '0') > 0) {
            $dv   = $this->math->div($hex, '256');
            $rem  = $this->math->mod($hex, '256');
            $hex  = $dv;
            $byte = $byte . $digits[$rem];
        }

        return strrev($byte);
    }

    /**
     * Determines the type of number passed to function.
     *
     * @param  mixed      $value The value to check.
     * @return string     $value The data type of the value.
     * @throws \Exception
     */
    public function Test($value)
    {
        /* Let's get the non-numeric data types out of the way first... */
        if (false === isset($value) || true === is_null($value)) {
            return 'null';
        }

        /* Special case. */
        if ($value == '0') {
            return 'zer';
        }

        if (true === is_object($value)) {
            return 'obj';
        }

        if (true === is_array($value)) {
            return 'arr';
        }

        if (true === is_resource($value)) {
            return 'res';
        }

        if (true === is_int($value)) {
            return 'int';
        }

        if (true === is_float($value)) {
            return 'flo';
        }

        /* This is what the data should be really. */
        if (true === is_string($value)) {
            $value = strtolower(trim($value));

            if (substr($value, 0, 1) == '-') {
                $value = substr($value, 1);
            }

            $h_prefix = false;
            $h_digits = false;
            $d_digits = false;
            $b_digits = false;

            /* Determine if we have a hex prefix to begin with. */
            if (substr($value, 0, 2) == '0x') {
                $h_prefix = true;
                $value = substr($value, 2);
            }

            /* Both hex and regular decimal numbers will pass this check. */
            if (preg_match('/^[a-f0-9]*$/', $value) == 1) {
                $h_digits = true;
            }

            /* But, if this test is true, it's definitely a pure decimal number. */
            if (preg_match('/^[0-9]*$/', $value) == 1) {
                $d_digits = true;
            }

            /* Finally, if this test is true, it's definitely a pure binary number string. */
            if (preg_match('/^[0-1]*$/', $value) == 1) {
                $b_digits = true;
            }

            /* The first two cases are straightforward... */
            if ($b_digits == true) {
                return 'bin';
            }

            if ($d_digits == true) {
                return 'dec';
            }

            /* Now we're probably dealing with a hex number. */
            if ($h_digits == true) {
                return 'hex';
            }
        }

        /* Otherwise, this is either binary or garbage... */
        return 'unk';
    }

    /**
     * Check to ensure we're working with a number or numeric string.
     *
     * @param  mixed   $value The value to check.
     * @return boolean        Whether or not this is a number.
     */
    public function numberCheck($value)
    {
        /* We are only concerned with these types... */
        switch ($this->Test($value)) {
            case 'hex':
            case 'dec':
            case 'bin':
            case 'int':
            case 'zer':
                return true;
            default:
                return false;
        }
    }

    /**
     * Generates a secure random number using the OpenSSL extension.
     *
     * @param  int        $length Number of bytes to return.
     * @return string             Random data in hex form.
     * @throws \Exception
     */
    public function SecureRandomNumber($length = 32)
    {
        $cstrong = false;

        if (false === function_exists('openssl_random_pseudo_bytes')) {
            throw new \Exception('This class requires the OpenSSL extension for PHP. Please install this extension.');
        }

        $secure_random_number = openssl_random_pseudo_bytes($length, $cstrong);

        if (false === $secure_random_number || false === $cstrong) {
            throw new \Exception('Could not generate a cryptographically-strong random number. Your OpenSSL extension might be old or broken.');
        }

        return '0x' . strtolower(bin2hex($secure_random_number));
    }

    /**
     * Converts a hex number to BASE-58 used for Bitcoin-related tasks.
     *
     * @param  string     $hex
     * @return string     $return
     * @throws \Exception
     */
    private function encodeBase58($hex)
    {
        if ($this->param_checking == true) {
            if ($this->numberCheck($hex) === false) {
                throw new \Exception('Missing or invalid number parameter passed to the encodeBase58() function.  Value received was "' . var_export($hex, true) . '".');
            }
        }

        if ($this->math == null) {
            $this->MathCheck();
        }

        $hex     = strtolower(trim($hex));

        try {
            if (strlen($hex) % 2 != 0 || $this->Test($hex) != 'hex') {
                $return = 'Error - uneven number of hex characters passed to encodeBase58().  Value received was "' . var_export($hex, true) . '".';
            } else {
                $chars   = $this->b58_chars;
                $orighex = $hex;

                if ($hex[0] . $hex[1] != '0x') {
                    $hex = '0x' . $hex;
                }

                $return = '';

                while ($this->math->comp($hex, '0') > 0) {
                    $dv     = $this->math->div($hex, '58');
                    $rem    = $this->math->mod($hex, '58');
                    $hex    = $dv;
                    $return = $return . $chars[$rem];
                }

                $return = strrev($return);

                for ($i = 0; $i < strlen($orighex) && substr($orighex, $i, 2) == '00'; $i += 2) {
                    $return = '1' . $return;
                }
            }

            return $return;
        } catch (\Exception $e) {
            throw $e;
        }
    }

    /**
     * Generates an array of byte values.
     *
     * @return array $tempvals An array of bytes.
     */
    private function GenBytes()
    {
        $tempvals = array();

        for ($x = 0; $x < 256; $x++) {
            $tempvals[$x] = chr($x);
        }

        return $tempvals;
    }

    /**
     * Internal function to make sure we can find
     * an acceptable math extension to use here.
     *
     * @throws \Exception
     */
    private function MathCheck()
    {
        if ($this->math == null) {
            if (function_exists('gmp_add')) {
                $this->math = new GMP();
                return;
            } else if (function_exists('bcadd')) {
                $this->math = new BC();
                return;
            } else {
                throw new \Exception('Both GMP and BC Math extensions are missing on this system!  Please install one to use the Masterchain math library.');
            }
        }

        if (true === empty($this->bytes)) {
            $this->bytes = $this->GenBytes();
        }

        if ($this->Gx == '') {
            $this->Gx = '0x' . substr(strtolower($this->G), 2, 64);
        }

        if ($this->Gx == '') {
            $this->Gy = '0x' . substr(strtolower($this->G), 66, 64);
        }
    }

    /**
     * Basic range check. Throws exception if
     * coordinate value is out of range.
     *
     * @param  string     $value The coordinate to check.
     * @return boolean           The result of the check.
     * @throws \Exception
     */
    public function RangeCheck($value)
    {
        if ($this->numberCheck($value) === false) {
            throw new \Exception('Empty value parameter passed to RangeCheck() function.  Value received was "' . var_export($value, true) . '".');
        }

        try {
            /* Check to see if $value is in the range [1, n-1] */
            if ($this->math->comp($value, '0x01') <= 0 && $this->math->comp($value, $this->n) > 0) {
                throw new \Exception('The coordinate value is out of range. Should be 1 < r < n-1.  Value checked was "' . var_export($value, true) . '".');
            }
        } catch (\Exception $e) {
            throw $e;
        }

        return true;
    }
}

/**
 * This trait implements the elliptic curve math functions required to generate
 * a public/private EC keypair based on the secp256k1 curve parameters.
 *
 * @author Hycent Afocha <hycent@afocha.org>
 */
trait Point
{
    use Math;

    /**
     * EC Point addition method P + Q = R where:
     *   s = (yP - yQ) / (xP - xQ) mod p
     *   xR = s2 - xP - xQ mod p
     *   yR = -yP + s(xP - xR) mod p
     *
     * @param  array|string $P The first point to add.
     * @param  array|string $Q The second point to add.
     * @return array        $R The result of the point addition.
     * @throws \Exception
     */
    public function pointAdd($P, $Q)
    {
        if (false === isset($P) || true === empty($P)) {
            throw new \Exception('You must provide a valid first point parameter to add.');
        }

        if (false === isset($Q) || true === empty($Q)) {
            throw new \Exception('You must provide a valid second point parameter to add.');
        }

        if ($P == $Q) {
            return $this->pointDouble($P);
        }

        if ($P == $this->Inf || false === is_array($P)) {
            return $Q;
        }

        if ($Q == $this->Inf || false === is_array($Q)) {
            return $P;
        }

        $ss = '0';

        $R = array('x' => '0', 'y' => '0');

        try {
            $mm = $this->Subtract($P['y'], $Q['y']);
            $nn = $this->Subtract($P['x'], $Q['x']);
            $oo = $this->Invert($nn, $this->p);
            $st = $this->Multiply($mm, $oo);
            $ss = $this->Modulo($st, $this->p);

            $R['x'] = $this->Modulo($this->Subtract($this->Subtract($this->Multiply($ss, $ss), $P['x']), $Q['x']), $this->p);
            $R['y'] = $this->Modulo($this->Add($this->Subtract('0', $P['y']), $this->Multiply($ss, $this->Subtract($P['x'], $R['x']))), $this->p);
        } catch (\Exception $e) {
            throw $e;
        }

        return $R;
    }

    /**
     * Point multiplication method 2P = R where
     *   s = (3xP2 + a) / (2yP) mod p
     *   xR = s2 - 2xP mod p
     *   yR = -yP + s(xP - xR) mod p
     *
     * @param  array|string  $P The point to multiply.
     * @return array|string  $R The multiplied point.
     * @throws \Exception
     */
    public function pointDouble($P)
    {
        if (false === isset($P) || true === empty($P)) {
            throw new \Exception('You must provide a valid point parameter to double.');
        }

        if ($P == $this->Inf || false === is_array($P)) {
            return $this->Inf;
        }

        $ss = '0';

        $R = array('x' => '0', 'y' => '0');

        try {
            $mm   = $this->Add($this->Multiply('3', $this->Multiply($P['x'], $P['x'])), $this->a);
            $oo   = $this->Multiply('2', $P['y']);
            $nn   = $this->Invert($oo, $this->p);
            $st   = $this->Multiply($mm, $nn);
            $ss   = $this->Modulo($st, $this->p);
            $xmul = $this->Multiply('2', $P['x']);
            $smul = $this->Multiply($ss, $ss);
            $xsub = $this->Subtract($smul, $xmul);
            $xmod = $this->Modulo($xsub, $this->p);

            $R['x'] = $xmod;

            $ysub  = $this->Subtract($P['x'], $R['x']);
            $ymul  = $this->Multiply($ss, $ysub);
            $ysub2 = $this->Subtract('0', $P['y']);
            $yadd  = $this->Add($ysub2, $ymul);

            $R['x'] = $R['x'];
            $R['y'] = $this->Modulo($yadd, $this->p);
        } catch (\Exception $e) {
            throw $e;
        }

        return $R;
    }

    /**
     * Performs a test of an EC point by substituting the new
     * values into the equation for the standard form of the curve.
     *
     * @param  array|string $P   The generated point to test.
     * @return bool              Whether or not the point is valid.
     * @throws \Exception
     */
    public function PointTest($P)
    {
        if (false === isset($P) || true === empty($P) || $this->Inf == $P || false === is_array($P)) {
            throw new \Exception('You must provide a valid point to test.');
        }

        /*
         * Algebraic form of the elliptic curve:
         * y^2 (mod p) = x^3 + ax + b (mod p)
         */
        $y2    = '';
        $x3    = '';
        $ax    = '';
        $left  = '';
        $right = '';

        try {
            /* Left y^2 term */
            $y2 = $this->Multiply($P['y'], $P['y']);

            /* Right, first x^3 term */
            $x3 = $this->Multiply($this->Multiply($P['x'], $P['x']), $P['x']);

            /* Right, second ax term */
            $ax = $this->Multiply($this->a, $P['x']);

            /*
             * If the right side of the equation equals the left,
             * we have a valid point, agebraically speaking.
             */
            $left  = $this->Modulo($y2, $this->p);
            $right = $this->Modulo($this->Add($this->Add($x3, $ax), $this->b), $this->p);
        } catch (\Exception $e) {
            throw $e;
        }

        return $left == $right;
    }

    /**
     * Pure PHP implementation of the Double-And-Add algorithm, for more info see:
     * http://en.wikipedia.org/wiki/Elliptic_curve_point_multiplication#Double-and-add
     *
     * @param  string       $x Scalar value.
     * @param  array        $P Base EC curve point.
     * @return array|string $S Either 'infinity' or the new coordinates.
     * @throws \Exception
     */
    public function doubleAndAdd($x, $P)
    {
        if (false === isset($P) || true === empty($P) || false === is_array($P)) {
            throw new \Exception('You must provide a valid point to scale.');
        }

        if (false === isset($x) || true === empty($x)) {
            throw new \Exception('Missing or invalid scalar value in doubleAndAdd() function.');
        }

        $tmp = $this->D2B($x);
        $n   = strlen($tmp) - 1;
        $S   = $this->Inf;

        while ($n >= 0) {
            $S = $this->pointDouble($S);

            if ($tmp[$n] == '1') {
                $S = $this->pointAdd($S, $P);
            }

            $n--;
        }

        return $S;
    }

    /**
     * Pure PHP implementation of the Montgomery Ladder algorithm which protects
     * us against side-channel attacks.  This performs the same number of operations
     * regardless of the scalar value being used as the multiplier.  It's slower than
     * the traditional double-and-add algorithm because of that fact but safer to use.
     *
     * @param  string       $x Scalar value.
     * @param  array        $P Base EC curve point.
     * @return array|string $S Either 'infinity' or the new coordinates.
     * @throws \Exception
     */
    public function mLadder($x, $P)
    {
        if (false === isset($P) || true === empty($P) || false === is_array($P)) {
            throw new \Exception('You must provide a valid point to scale.');
        }

        if (false === isset($x) || true === empty($x)) {
            throw new \Exception('Missing or invalid scalar value in mLadder() function.');
        }

        $tmp = $this->D2B($x);
        $n   = strlen($tmp) - 1;
        $S0  = $this->Inf;
        $S1  = $P;

        while ($n >= 0) {
            if ($tmp[$n] == '0') {
                $S1 = $this->pointAdd($S0, $S1);
                $S0 = $this->pointDouble($S0);
            } else {
                $S0 = $this->pointAdd($S0, $S1);
                $S1 = $this->pointDouble($S1);
            }

            $n--;
        }

        return $S0;
    }

    /**
     * Creates a new point on the elliptic curve.
     *
     * @param  boolean   $ladder Whether or not to use the mladder method.
     * @return array
     * @throws \Exception
     */
    public function GenerateNewPoint($ladder = true)
    {
        $P = array(
                   'x' => strtolower(trim($this->Gx)),
                   'y' => strtolower(trim($this->Gy))
                  );

        do {
            $random_number = $this->SecureRandomNumber();
        } while ($this->Compare($random_number, '0x01') <= 0 || $this->Compare($random_number, $this->n) >= 0);

        if ($ladder !== true) {
            $R = $this->doubleAndAdd($random_number, $P);
        } else {
            $R = $this->mLadder($random_number, $P);
        }

        if ($this->PointTest($R)) {
            $Rx_hex = str_pad($this->encodeHex($R['x']), 64, "0", STR_PAD_LEFT);
            $Ry_hex = str_pad($this->encodeHex($R['y']), 64, "0", STR_PAD_LEFT);
        } else {
            throw new \Exception('Point test failed! Cannot continue. I got the point: ' . var_export($R, true));
        }

        return array(
                     'random_number' => $random_number,
                     'R'             => $R,
                     'Rx_hex'        => $Rx_hex,
                     'Ry_hex'        => $Ry_hex
                    );

    }

    /**
     * Creates a new point on the elliptic curve using a key number.
     *
     * @param  boolean   $ladder Whether or not to use the mladder method.
     * @return array
     * @throws \Exception
     */
    public function GenerateKeyPoint($key,$ladder = true)
    {
        $P = array(
                   'x' => strtolower(trim($this->Gx)),
                   'y' => strtolower(trim($this->Gy))
                  );

        do {
            if (substr($key, 0, 2) == '0x') {
                $key = $key;
            }else $key = $this->encodeHex($key);
        } while ($this->Compare($key, '0x01') <= 0 || $this->Compare($key, $this->n) >= 0);

        if ($ladder !== true) {
            $R = $this->doubleAndAdd($key, $P);
        } else {
            $R = $this->mLadder($key, $P);
        }

        if ($this->PointTest($R)) {
            $Rx_hex = str_pad($this->encodeHex($R['x'],false), 64, "0", STR_PAD_LEFT);
            $Ry_hex = str_pad($this->encodeHex($R['y'],false), 64, "0", STR_PAD_LEFT);
        } else {
            throw new \Exception('Point test failed! Cannot continue. I got the point: ' . var_export($R, true));
        }

        return array(
                     'random_number' => $key,
                     'R'             => $R,
                     'Rx_hex'        => $Rx_hex,
                     'Ry_hex'        => $Ry_hex
                    );

    }
}

/**
 * Binary Calculator math class used by the main math class.
 *
 * @author Hycent Afocha <hycent@afocha.org>
 */
final class BC
{
    /**
     * Public constructor method.
     */
    public function __construct()
    {
        bcscale(0);
    }

    /**
     * Adds two arbitrary precision numbers.
     * 
     * @param  string $a  The first number.
     * @param  string $b  The second number.
     * @return string
     */
    public function add($a, $b)
    {
        $a = $this->normalize($a);
        $b = $this->normalize($b);

        return (string)bcadd($a, $b);
    }

    /**
     * Multiplies two arbitrary precision numbers.
     * 
     * @param  string $a  The first number.
     * @param  string $b  The second number.
     * @return string
     */
    public function mul($a, $b)
    {
        $a = $this->normalize($a);
        $b = $this->normalize($b);

        return (string)bcmul($a, $b);
    }

    /**
     * Divides two arbitrary precision numbers.
     * 
     * @param  string $a  The first number.
     * @param  string $b  The second number.
     * @return string
     */
    public function div($a, $b)
    {
        $a = $this->normalize($a);
        $b = $this->normalize($b);

        return (string)bcdiv($a, $b);
    }

    /**
     * Subtracts two arbitrary precision numbers.
     * 
     * @param  string $a  The first number.
     * @param  string $b  The second number.
     * @return string
     */
    public function sub($a, $b)
    {
        $a = $this->normalize($a);
        $b = $this->normalize($b);

        return (string)bcsub($a, $b);
    }

    /**
     * Calculates the modulo 'b' of 'a'.
     * 
     * @param  string $a  The first number.
     * @param  string $b  The second number.
     * @return string
     */
    public function mod($a, $b)
    {
        $a = $this->normalize($a);
        $b = $this->normalize($b);

        return (string)bcmod($a, $b);
    }
    
    /**
     * Compares two arbitrary precision numbers.
     * 
     * @param  string $a  The first number.
     * @param  string $b  The second number.
     * @return string
     */
    public function comp($a, $b)
    {
        $a = $this->normalize($a);
        $b = $this->normalize($b);

        return (string)bccomp($a, $b);
    }

    /**
     * Raises $a to the power of $b.
     *
     * @param  string $a
     * @param  string $b
     * @return string
     */
    public function power($a, $b)
    {
        $a = $this->normalize($a);
        $b = $this->normalize($b);

        return (string)bcpow($a, $b);
    }

    /**
     * Binary Calculator implementation of GMP's inverse
     * modulo function, where ax = 1(mod p).
     *
     * @param  string $number  The number to inverse modulo.
     * @param  string $modulus The modulus.
     * @return string $a       The result.
     * @throws \Exception
     */
    public function inv($number, $modulus)
    {
        if (false === isset($number) || true === empty($number)) {
            throw new \Exception('Empty number parameter passed to bc_invert() function.');
        }

        if (false === isset($modulus) || true === empty($modulus)) {
            throw new \Exception('Empty modulus parameter passed to bc_invert() function.');
        }

        if (!$this->coprime($number, $modulus)) {
            return '0';
        }

        $a = '1';
        $b = '0';
        $z = '0';
        $c = '0';

        $modulus = $this->normalize($modulus);
        $number  = $this->normalize($number);

        $mod = $modulus;
        $num = $number;

        try {
            do {
                $z = bcmod($num, $mod);
                $c = bcdiv($num, $mod);

                $num = $mod;
                $mod = $z;

                $z = bcsub($a, bcmul($b, $c));

                $a = $b;
                $b = $z;
            } while (bccomp($mod, '0') > 0);

            if (bccomp($a, '0') < 0) {
                $a = bcadd($a, $modulus);
            }
        } catch (\Exception $e) {
            throw $e;
        }

        return (string)$a;
    }

    /**
     * Function to determine if two numbers are
     * co-prime according to the Euclidean algo.
     *
     * @param  string $a  First param to check.
     * @param  string $b  Second param to check.
     * @return bool       Whether the params are cp.
     * @throws \Exception
     */
    private function coprime($a, $b)
    {
        if (false === isset($a) || true === empty($a)) {
            throw new \Exception('Empty first number parameter passed to coprime() function.  Value received was "' . var_export($a, true) . '".');
        }

        if (false === isset($b) || true === empty($b)) {
            throw new \Exception('Empty second number parameter passed to coprime() function.  Value received was "' . var_export($b, true) . '".');
        }

        $small = 0;
        $diff  = 0;

        $a = $this->normalize($a);
        $b = $this->normalize($b);

        try {
            while (bccomp($a, '0') > 0 && bccomp($b, '0') > 0) {
                if (bccomp($a, $b) == -1) {
                    $small = $a;
                    $diff  = bcmod($b, $a);
                }

                if (bccomp($a, $b) == 1) {
                    $small = $b;
                    $diff  = bcmod($a, $b);
                }

                if (bccomp($a, $b) == 0) {
                    $small = $a;
                    $diff  = bcmod($b, $a);
                }

                $a = $small;
                $b = $diff;
            }

            if (bccomp($a, '1') == 0) {
                return true;
            }
        } catch (\Exception $e) {
            throw $e;
        }

        return false;
    }

    /**
     * BC doesn't like the '0x' hex prefix that GMP prefers.
     *
     * @param  string $a The value to normalize.
     * @return string
     */
    private function normalize($a)
    {
        if (substr($a, 0, 2) == '0x') {
            $a = substr($a, 2);
        }

        return (string)$a;
    }
}

final class GMP
{
    /**
     * Adds two arbitrary precision numbers.
     *
     * @param  string $a  The first number.
     * @param  string $b  The second number.
     * @return string
     */
    public function add($a, $b)
    {
        return gmp_strval(gmp_add($a, $b));
    }
    /**
     * Multiplies two arbitrary precision numbers.
     *
     * @param  string $a  The first number.
     * @param  string $b  The second number.
     * @return string
     */
    public function mul($a, $b)
    {
        return gmp_strval(gmp_mul($a, $b));
    }
    /**
     * Divides two arbitrary precision numbers.
     *
     * @param  string $a  The first number.
     * @param  string $b  The second number.
     * @return string
     */
    public function div($a, $b)
    {
        return gmp_strval(gmp_div($a, $b));
    }
    /**
     * Subtracts two arbitrary precision numbers.
     *
     * @param  string $a  The first number.
     * @param  string $b  The second number.
     * @return string
     */
    public function sub($a, $b)
    {
        return gmp_strval(gmp_sub($a, $b));
    }
    /**
     * Calculates the modulo of two numbers.
     * There's a slight quirk in GMP's implementation
     * so this returns a mathematically correct answer
     * if you specify the $correct parameter.
     *
     * @param  string  $a        The first number.
     * @param  string  $b        The second number.
     * @param  boolean $correct  Flag to calculate mathematically correct modulo.
     * @return string
     */
    public function mod($a, $b, $correct = false)
    {
        if ($correct === true) {
            if (gmp_cmp($a, '0') < 0) {
                return gmp_strval(gmp_sub(gmp_mod($a, $b), $a));
            }
        }

        return gmp_strval(gmp_mod($a, $b));
    }

    /**
     * Compares two arbitrary precision numbers.
     *
     * @param  string $a  The first number.
     * @param  string $b  The second number.
     * @return integer
     */
    public function comp($a, $b)
    {
        return gmp_cmp($a, $b);
    }

    /**
     * GMP's inverse modulo function, where ax = 1(mod p).
     *
     * @param  string $a  The number to inverse modulo.
     * @param  string $b  The modulus.
     * @return string
     */
    public function inv($a, $b)
    {
        return gmp_strval(gmp_invert($a, $b));
    }

    /**
     * Returns the string value of a GMP resource.
     *
     * @param  mixed  $a
     * @return string
     */
    public function normalize($a)
    {
        return gmp_strval($a);
    }

    /**
     * Raises 'a' into power 'b'.
     *
     * @param  string $a  The first number.
     * @param  string $b  The second number.
     * @return string
     */
    public function power($a, $b)
    {
        return gmp_strval(gmp_pow($a, $b));
    }
}

/**
 * This class implements the elliptic curve math functions required to generate
 * an ECDSA signature based on a previously generated private key.
 *
 */
final class Signature
{
    use Point;

    public $encoded_signature;

    private $r_coordinate;
    private $s_coordinate;
    private $raw_signature;
    private $P;

    /**
     * Public constructor method.
     *
     * @param  string $message     The message to sign (optional).
     * @param  string $private_key The signer's private key (optional).
     */
    public function __construct($message = '', $private_key = '')
    {
        $this->encoded_signature = '';
        $this->r_coordinate      = '';
        $this->s_coordinate      = '';
        $this->raw_signature     = '';

        $this->P = array(
                         'x' => $this->Gx,
                         'y' => $this->Gy
                        );

        if ($message != '' && $private_key != '') {
            return $this->Generate($message, $private_key);
        }
    }

    /**
     * Returns the encoded signature.
     *
     * @return string The encoded signature.
     */
    public function __toString()
    {
        return $this->encoded_signature;
    }

    /**
     * Generates an ECDSA signature for a message using the private key
     * parameter in hex format. Returns an associative array of all the
     * signature data including raw point information and the signature.
     *
     * @param  string    $message     The message to be signed.
     * @param  string    $private_key The private key in hex.
     * @return string    $signature   The signature data.
     * @throws \Exception
     */
    public function Generate($message, $private_key)
    {
        if ($this->numberCheck($private_key) === false || false === isset($message) || true  === empty($message)) {
            throw new \Exception('The private key and message parameters are required to generate a signature.  Value received for first parameter was "' . var_export($message, true) . '" and second parameter was "' . var_export($private_key, true) . '".');
        }

        $e         = '';
        $k         = '';
        $r         = '';
        $s         = '';

        $R         = array();
        $signature = array();

        $private_key = $this->encodeHex($private_key);

        if (strlen($private_key) < 64) {
            throw new \Exception('Invalid public key format!  Must be a 32-byte (64 character) hex number.  Value checked was "' . var_export($private_key, true) . '".');
        }

        try {
            do {
                /* Get the message hash and a new random number */
                $e = $this->decodeHex(hash('sha256', $message));
                $k = $this->SecureRandomNumber();

                /* Calculate a new curve point from R=k*G (x1,y1) */
                $R      = $this->DoubleAndAdd($k, $this->P);
                $R['x'] = '0x' . str_pad($this->encodeHex($R['x'], false), 64, "0", STR_PAD_LEFT);

                /* r = x1 mod n */
                $r = $this->Modulo($R['x'], $this->n);

                /* s = k^-1 * (e+d*r) mod n */
                $s = $this->Modulo($this->Multiply($this->Invert($k, $this->n), $this->Add($e, $this->Multiply($private_key, $r))), $this->n);

            } while ($this->Compare($r, '0x00') <= 0 || $this->Compare($s, '0x00') <= 0);
        } catch (\Exception $e) {
            throw $e;
        }

        $signature = array(
                           'r' => '0x' . str_pad($this->encodeHex($r, false), 64, "0", STR_PAD_LEFT),
                           's' => '0x' . str_pad($this->encodeHex($s, false), 64, "0", STR_PAD_LEFT)
                          );

        $this->r_coordinate = $signature['r'];
        $this->s_coordinate = $signature['s'];

        $this->encoded_signature = $this->Encode($this->r_coordinate, $this->s_coordinate);

        return $this->encoded_signature;
    }

    /**
     * Verifies an ECDSA signature previously generated.
     *
     * @param  string $sig     The signature in hex.
     * @param  string $msg     The message signed.
     * @param  string $pubkey  The uncompressed public key of the signer.
     * @return bool            The result of the verification.
     * @throws \Exception
     */
    public function Verify($sig, $msg, $pubkey)
    {
        if (false === isset($sig)     ||
            true  === empty($sig)     ||
            false === isset($msg)     ||
            true  === empty($msg)     ||
            false === isset($pubkey)  ||
            true  === empty($pubkey))
        {
            throw new \Exception('The signature, public key and message parameters are required to verify a signature.  Value received for first parameter was "' . var_export($sig, true) . '", second parameter was "' . var_export($msg, true) . '" and third parameter was "' . var_export($pubkey, true) . '".');
        }

        $e         = '';
        $w         = '';
        $u1        = '';
        $u2        = '';
        $Za        = array();
        $Zb        = array();
        $Z         = array();

        $coords = $this->parseSig($sig);

        $r = $this->CoordinateCheck(trim(strtolower($coords['r'])));
        $s = $this->CoordinateCheck(trim(strtolower($coords['s'])));

        $r_dec = $this->decodeHex($r);
        $s_dec = $this->decodeHex($s);

        /* Convert the hash of the hex message to decimal */
        $e = $this->decodeHex(hash('sha256', $msg));

        $n_dec = $this->decodeHex($this->n);

        $pubkey = trim(strtolower($pubkey));

        if (strlen($pubkey) < 128) {
            throw new \Exception('Unknown public key format - provided value was too short.  The uncompressed public key is expected.  Value checked was "' . var_export($pubkey, true) . '".');
        }

        if (substr($pubkey, 0, 2) == '04') {
            $pubkey = substr($pubkey, 2);
        }

        /* Parse the x,y coordinates */
        $Q = array(
                   'x' => '0x' . substr($pubkey, 0, 64),
                   'y' => '0x' . substr($pubkey, 64)
                  );

        if (strlen($Q['x']) < 64 || strlen($Q['y']) < 64) {
            throw new \Exception('Unknown public key format - could not parse the x,y coordinates.  The uncompressed public key is expected.  Value checked was "' . var_export($pubkey, true) . '".');
        }

        try {
            /* Calculate w = s^-1 (mod n) */
            $w = $this->Invert($s_dec, $n_dec);

            /* Calculate u1 = e*w (mod n) */
            $u1 = $this->Modulo($this->Multiply($e, $w), $n_dec);

            /* Calculate u2 = r*w (mod n) */
            $u2 = $this->Modulo($this->Multiply($r_dec, $w), $n_dec);

            /* Get new point Z(x1,y1) = (u1 * G) + (u2 * Q) */
            $Z  = $this->PointAdd($this->DoubleAndAdd($u1, $this->P), $this->DoubleAndAdd($u2, $Q));

            /*
             * A signature is valid if r is congruent to x1 (mod n)
             * or in other words, if r - x1 is an integer multiple of n.
             */
            if ($this->Compare($r, $this->encodeHex($Z['x'])) == 0) {
                return true;
            } else {
                throw new \Exception('The signature is invalid!  Value used for $r was "' . var_export($r, true) . '" and the calculated $x parameter was "' . var_export($Z['x'], true) . '".');
            }

        } catch (\Exception $e) {
            throw $e;
        }
    }

    /**
     * ASN.1 DER encodes the signature using the form:
     * 0x30 + size(all) + 0x02 + size(r) + r + 0x02 + size(s) + s
     * and if the msb is set add 0x00
     *
     * @param  string $r      The r coordinate in hex.
     * @param  string $s      The s coordinate in hex.
     * @return string $retval The DER encoded signature info.
     * @throws \Exception
     */
    public function Encode($r, $s)
    {
        if ($this->numberCheck($r) === false || $this->numberCheck($s) === false) {
            throw new \Exception('The signature coordinate parameters are required.  Value received for first parameter was "' . var_export($r, true) . '" and second parameter was "' . var_export($s, true) . '".');
        }

        $r = $this->binConv($this->CoordinateCheck($r));
        $s = $this->binConv($this->CoordinateCheck($s));

        $retval = array(
                        'bin_r' => $this->msbCheck($r[0]) . $r,
                        'bin_s' => $this->msbCheck($s[0]) . $s
                       );

        $seq = chr(0x02) . chr(strlen($retval['bin_r'])) . $retval['bin_r'] .
               chr(0x02) . chr(strlen($retval['bin_s'])) . $retval['bin_s'];

        return bin2hex(chr(0x30) . chr(strlen($seq)) . $seq);
    }

    /**
     * Determines if the msb is set.
     *
     * @param  string $value The binary data to check.
     * @return string
     */
    private function msbCheck($value)
    {
        if ($this->Compare('0x' . bin2hex($value), '0x80') >= 0) {
            return chr(0x00);
        } else {
            return;
        }
    }

    /**
     * Parses a ECDSA signature to retrieve the
     * r and s coordinate pair. Used to verify.
     *
     * @param  string $signature The ECDSA signature to parse.
     * @return array             The r and s coordinates.
     * @throws \Exception
     */
    private function parseSig($signature)
    {
        if (false === isset($signature) || true === empty($signature)) {
            throw new \Exception('You must provide a valid hex parameter.  Value received was "' . var_export($signature, true) . '".');
        }

        $signature = trim($signature);

        /* This is the main structure we'll use for storing our parsed signature. */
        $ecdsa_struct = array(
                              'sigstart' => '',
                              'siglen'   => '',
                              'rtype'    => '',
                              'rlen'     => '',
                              'roffset'  => 0,
                              'r'        => '',
                              'stype'    => '',
                              'slen'     => '',
                              'soffset'  => 0,
                              's'        => '',
                              'original' => '',
                              'totallen' => 0
                             );

        $ecdsa_struct['original'] = $signature;
        $ecdsa_struct['totallen'] = strlen($signature);

        if ($ecdsa_struct['totallen'] != '140' && $ecdsa_struct['totallen'] != '142' && $ecdsa_struct['totallen'] != '144') {
            throw new \Exception('Invalid ECDSA signature provided!  Length is invalid.  Value checked was "' . var_export($ecdsa_struct['original'], true) . '".');
        }

        $ecdsa_struct['sigstart'] = substr($signature, 0, 2);

        if ($ecdsa_struct['sigstart'] != '30') {
            throw new \Exception('Invalid ECDSA signature provided!  Unknown signature format.  Value checked was "' . var_export($ecdsa_struct['original'], true) . '".');
        }

        $signature = substr($signature, 2);
        $ecdsa_struct['siglen'] = substr($signature, 0, 2);

        if ($ecdsa_struct['siglen'] != '44' && $ecdsa_struct['siglen'] != '45' && $ecdsa_struct['siglen'] != '46') {
            throw new \Exception('Invalid ECDSA signature provided!  Total signature length is invalid.  Value checked was "' . var_export($ecdsa_struct['original'], true) . '".');
        }

        $signature = substr($signature, 2);
        $ecdsa_struct['rtype'] = substr($signature, 0, 2);

        if ($ecdsa_struct['rtype'] != '02') {
            throw new \Exception('Invalid ECDSA signature provided!  The r-coordinate data type is invalid.  Value checked was "' . var_export($ecdsa_struct['original'], true) . '".');
        }

        $signature = substr($signature, 2);
        $ecdsa_struct['rlen'] = substr($signature, 0, 2);

        if ($ecdsa_struct['rlen'] != '20' && $ecdsa_struct['rlen'] != '21') {
            throw new \Exception('Invalid ECDSA signature provided!  The r-coordinate length is invalid.  Value checked was "' . var_export($ecdsa_struct['original'], true) . '".');
        } else {
            if ($ecdsa_struct['rlen'] == '21') {
                $ecdsa_struct['roffset'] = 2;
            }
        }

        $signature = substr($signature, 2);
        $ecdsa_struct['r'] = substr($signature, $ecdsa_struct['roffset'], 64);

        if (ctype_xdigit($ecdsa_struct['r']) === false) {
            throw new \Exception('Invalid ECDSA signature provided!  The r-coordinate is not in hex format.  Value checked was "' . var_export($ecdsa_struct['original'], true) . '".');
        }

        $signature = substr($signature, $ecdsa_struct['roffset'] + 64);
        $ecdsa_struct['stype'] = substr($signature, 0, 2);

        if ($ecdsa_struct['stype'] != '02') {
            throw new \Exception('Invalid ECDSA signature provided!  The s-coordinate data type is invalid.  Value checked was "' . var_export($ecdsa_struct['original'], true) . '".');
        }

        $signature = substr($signature, 2);
        $ecdsa_struct['slen'] = substr($signature, 0, 2);

        if ($ecdsa_struct['slen'] != '20' && $ecdsa_struct['slen'] != '21') {
            throw new \Exception('Invalid ECDSA signature provided!  The s-coordinate length is invalid.  Value checked was "' . var_export($ecdsa_struct['original'], true) . '".');
        } else {
            if ($ecdsa_struct['slen'] == '21') {
                $ecdsa_struct['soffset'] = 2;
            }
        }

        $signature = substr($signature, 2);
        $ecdsa_struct['s'] = substr($signature, $ecdsa_struct['soffset'], 64);

        if (ctype_xdigit($ecdsa_struct['s']) === false) {
            throw new \Exception('Invalid ECDSA signature provided!  The s-coordinate is not in hex format.  Value checked was "' . var_export($ecdsa_struct['original'], true) . '".');
        }

        return array(
                     'r' => $ecdsa_struct['r'],
                     's' => $ecdsa_struct['s']
                    );
    }

    /**
     * Basic coordinate check: verifies 
     *
     * @param  string $hex The coordinate to check.
     * @return string $hex The checked coordinate.
     * @throws \Exception
     */
    private function CoordinateCheck($hex)
    {
        if ($this->numberCheck($hex) === false) {
            throw new \Exception('You must provide a valid coordinate parameter in hex format to check.  Value received was "' . var_export($hex, true) . '".');
        }

        $hex = $this->encodeHex($hex);

        if (strlen($hex) < 64) {
            throw new \Exception('The coordinate value checked was not in hex format or was invalid.  Value checked was "' . var_export($tempval, true) . '".');
        }

        $this->RangeCheck($hex);

        return $hex;
    }
}

final class Sin
{
    use Math;

    public $encoded;

    private $SINtype;
    private $rawHashes;
    private $SINversion;

    /**
     * Public constructor method.
     *
     * @param  string $pubkey
     */
    public function __construct($pubkey = '')
    {
        $this->rawHashes = array(
                                 'step1' => null,
                                 'step2' => null,
                                 'step3' => null,
                                 'step4' => null,
                                 'step5' => null,
                                 'step6' => null,
                                );

        $this->encoded = '';

        /*
         * Type-2 (ephemeral) SINs may be generated at any
         * time, without network activity, much like bitcoin
         * addresses.
         */
        $this->SINtype    = '02';
        $this->SINversion = '0F';

        if (false === empty($pubkey)) {
            return $this->Generate($pubkey);
        }
    }

    /**
     * Returns the generated SIN.
     *
     * @return string The generated SIN.
     */
    public function __toString()
    {
        return $this->encoded;
    }

    /**
     * Returns the raw hash value array, if exists.
     *
     * @return array
     */
    public function getRawHashes()
    {
        return $this->rawHashes;
    }

    /**
     * Generates the SIN from the given public key.
     *
     * @param  string $pubkey The public key to encode.
     * @return string         The encoded SIN string.
     * @throws \Exception
     */
    public function Generate($pubkey)
    {
        if (false === isset($pubkey) || true === empty($pubkey)) {
            throw new \Exception('Missing or invalid public key parameter for Sin::Generate.');
        }

        /* take the sha256 hash of the public key in binary form and returning binary */
        $this->rawHashes['step1'] = hash('sha256', $this->binConv($pubkey), true);

        /* take the ripemd160 hash of the sha256 hash in binary form returning hex */
        $this->rawHashes['step2'] = hash('ripemd160', $this->rawHashes['step1']);

        /* prepend the hex SINversion and hex SINtype to the hex form of the ripemd160 hash */
        $this->rawHashes['step3'] = $this->SINversion . $this->SINtype . $this->rawHashes['step2'];

        /*
         * convert the appended hex string back to binary and double sha256 hash it leaving
         * it in binary both times
         */
        $this->rawHashes['step4'] = hash('sha256', hash('sha256', $this->binConv($this->rawHashes['step3']), true), true);

        /* convert it back to hex and take the first 4 hex bytes */
        $this->rawHashes['step5'] = substr(bin2hex($this->rawHashes['step4']), 0, 8);

        /* append the first 4 bytes to the fully appended string in step 3 */
        $this->rawHashes['step6'] = $this->rawHashes['step3'] . $this->rawHashes['step5'];

        /* finally base58 encode it */
        $this->encoded = $this->encodeBase58($this->rawHashes['step6']);

        if (true === empty($this->encoded)) {
            throw new \Exception('Failed to generate valid SIN value. Empty or NULL value was obtained.');
        }

        return $this->encoded;
    }
}

final class Gen
{
    use Point;

    /**
     * @var array
     */
    private $keyInfo;

    /**
     * Public constructor class.
     *
     * @param array $params Precalculated key values to load into this object.
     */
    public function __construct($params=null)
    {
        $this->keyInfo = array(
                               'private_key_hex'       => '',
                               'private_key_dec'       => '',
                               'public_key'            => '',
                               'public_key_compressed' => '',
                               'public_key_x'          => '',
                               'public_key_y'          => '',
                               'generation_time'       => '',
                              );

        if (true === isset($params)) {
            $this->setPK($params);
        }
    }

    /**
     * Returns the key information array JSON encoded.
     *
     * @return string
     */
    public function __toString()
    {
        $this->keyInfo['address']=$this->getAddress();
        return json_encode($this->keyInfo);
    }

    public function hex2dec($n){
        return \Afocha::from_to($n,'16','10');
    }
    public function dec2hex($n){
        return \Afocha::from_to($n,'10','16');
    }

    /**
     * Sets the private key value in hex or decimal.
     *
     * @param  bool
     * @return void
     */
    public function setPK($pk)
    {
        if (strtolower(substr($pk, 0, 2)) == '0x') {
            $this->keyInfo['private_key_hex'] = $pk;
            $this->keyInfo['private_key_dec'] = $this->decodeHex($pk);
        }else{
            $this->keyInfo['private_key_hex'] = $this->encodeHex($pk);
            $this->keyInfo['private_key_dec'] = $pk;
        }
        $this->initGen($this->keyInfo['private_key_hex']);
    }

    /**
     * Returns the private key value in hex or decimal.
     *
     * @param  bool
     * @return string
     */
    public function getPrivateKey($hex = true)
    {
        if ($hex === true) {
            return $this->keyInfo['private_key_hex'];
        } else {
            return $this->keyInfo['private_key_dec'];
        }
    }
    public function get_address_by_hex($hex){
        if (substr($hex,0,2)=='0x') {
            $h = $hex;
        }else{$h = $this->encodeHEX($hex);}
        $this->initGen($h);
        return $this->getAddress();
    }
    public function get_address_by_dec($dec){
        $hex = \Afocha::from_to($dec,'10','16');
        $h = $this->encodeHex($hex);
        $this->initGen($h);
        return $this->getAddress();
    }

    /**
     * Returns the compressed or uncompressed public key value.
     *
     * @param  string
     * @return string
     */
    public function getPublicKey($format = 'compressed')
    {
        if ($format == 'compressed') {
            return $this->keyInfo['public_key_compressed'];
        } else {
            return $this->keyInfo['public_key'];
        }
    }

    /**
     * Returns the address of a public key value.
     *
     * @param  string
     * @return string
     */
    public function getScript($format = 'compressed')
    {
        if($format=='compressed'){
            $pk=$this->keyInfo['public_key_compressed'];
        }else{
            $pk=$this->keyInfo['public_key'];
        }

        $a=strlen($pk);
        $b=2;
        $z='';
        if(($a%$b)>0){
            $a = $a+1;
            $pk = $pk."0";
        }
        for($i=0;$i<$a;$i+=$b) { 
            $z .= pack('H*', str_replace(array("\r", "\n", ' '), '', substr($pk, $i, $b)));
        }
        return hash('ripemd160', hash('sha256', $z, true));
    }

    /**
     * Returns the address of a public key value.
     *
     * @param  string
     * @return string
     */
    public function encodeScript($pk)
    {        
        $a=strlen($pk);
        $b=2;
        $z='';
        if(($a%$b)>0){
            $a = $a+1;
            $pk = $pk."0";
        }
        for($i=0;$i<$a;$i+=$b) { 
            $z .= pack('H*', str_replace(array("\r", "\n", ' '), '', substr($pk, $i, $b)));
        }
        return hash('ripemd160', hash('sha256', $z, true));
    }

    /**
     * Returns the address of a public key value.
     *
     * @param  string
     * @return string
     */
    public function decodeScript($h160,$prifix="00")
    {
        $pk= $prifix.$h160;
        
        $addr = $pk.substr(hash('sha256', hash('sha256', pack('H*', $pk), TRUE)), 0, 8);

        $num = gmp_strval(gmp_init($addr, 16), 58);
        $num = strtr($num, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuv', '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
    
        $pad = ''; $n = 0;
        while ($addr[$n] == '0' && $addr[$n+1] == '0') {
            $pad .= '1';
            $n += 2;
        }
    
        return $pad . $num;
    }

    /**
     * Returns the address of a public key value.
     *
     * @param  string
     * @return string
     */
    public function getWif($hash,$prifix="80")
    {
        $pk= $prifix.\Afocha::fpad($hash,64);
        
        $addr = $pk.substr(hash('sha256', hash('sha256', pack('H*', $pk), TRUE)), 0, 8);

        $num = gmp_strval(gmp_init($addr, 16), 58);
        $num = strtr($num, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuv', '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
    
        $pad = ''; $n = 0;
        while ($addr[$n] == '0' && $addr[$n+1] == '0') {
            $pad .= '1';
            $n += 2;
        }
    
        return $pad . $num;
    }

    /**
     * Returns the address of a public key value.
     *
     * @param  string
     * @return string
     */
    public function getAddress($compressed=true,$prifix="00")
    {
       if($compressed){
            $pk= $prifix.$this->getScript('compressed');
        }else{
            $pk= $prifix.$this->getScript('uncompressed');
        }

        $addr = $pk.substr(hash('sha256', hash('sha256', pack('H*', $pk), TRUE)), 0, 8);

        $num = gmp_strval(gmp_init($addr, 16), 58);
        $num = strtr($num, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuv', '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
    
        $pad = ''; $n = 0;
        while ($addr[$n] == $prifix[0] && $addr[$n+1] == $prifix[1]) {
            $pad .= '1';
            $n += 2;
        }
    
        return $pad . $num;
    }

    /**
     * Returns the address of a public key value.
     *
     * @param  string
     * @return string
     */
    public function lookup($find,$a,$z,$inHex=true)
    {
        $rst="";
        $st=[];
        $st['target']=$find;
        $tried = 0;
        $block = time();
        $chainid = $this->encodeHex("36893488147425433213");
        
        $dir= "bowchain".DIRECTORY_SEPARATOR.hash('md5',$_SERVER['REQUEST_URI']);
        if(!file_exists($dir)){
            mkdir($dir);
        }
    
        if (substr($a, 0, 2) == '0x') {
            $a = substr($a, 2);
        }
        if (substr($z, 0, 2) == '0x') {
            $z = substr($z, 2);
            $max = $this->hex2dec($z);
        }
        if($inHex){
            $index=$this->hex2dec($a);
        }

        $index= $a;
        $max= $z;
        $st["max"]=$max;

        $next= \NumberTheory::next_prime($index);

        $keep_looping = true;

        do {
            $this->setPK($index);
            $found= $this->getAddress();
            $st["found"]=$found;
            $st["index"]=$index;
            $st["pbkey"]=$this->getPublicKey();

            file_put_contents($dir."/{$block}.index", $index);
            file_put_contents($dir."/{$block}.json", $found.":".$index.",", FILE_APPEND | LOCK_EX);

            if ((string)$found === (string)$find) {
                $keep_looping = false;
                $rst="adrress found! last: ";
                file_put_contents($saw.'.tx', $index.':'.$found);
            }elseif ($tried>=$max) {
                $keep_looping = false;
                $rst= "Max of ".$tried." reached.";
                $rst="adrress Not found! \n last address found: ".$found;

                $last=file_get_contents($dir."/{$block}.index");
                file_put_contents($dir."/index",$last);
                unlink($dir."/{$block}.index");
            }
            $index=\NumberTheory::next_prime($index);
            $tried++;
        }while ($keep_looping);

        $st["debug"]=htmlentities($rst);
        
        return json_encode($st, JSON_PRETTY_PRINT);
    } 

    public function deeplookup($find,$a,$z,$inHex=true)
    {
        $rst="";
        $st=[];
        $st['target']=$find;
        $tried = 0;
        $block = time();
        $chainid = $this->encodeHex("53503667495378217807");
        
        $dir="bowchain".DIRECTORY_SEPARATOR.hash('md5',$_SERVER['REQUEST_URI']);
        if(!file_exists($dir)){
            mkdir($dir);
        }
    
        if (substr($a, 0, 2) == '0x') {
            $a = substr($a, 2);
        }
        if (substr($z, 0, 2) == '0x') {
            $z = substr($z, 2);
            $max = $this->hex2dec($z);
        }
        if($inHex){
            $index=$this->hex2dec($a);
        }

        $index= $a;
        $max= $z;
        $st["max"]=$max;

        $next= $this->Add($index,1);

        $keep_looping = true;

        do {
            $this->setPK($index);
            $found= $this->getAddress();
            file_put_contents($dir."/{$block}.index", $index);

            if(substr($found, 0,3) == "13z"){
                $st["found"]=$found;
                $st["index"]=$index;
                $st["pbkey"]=$this->getPublicKey();
                
                file_put_contents($dir."/wallet.csv", $found.",\t".$index."\n", FILE_APPEND | LOCK_EX);
                
                if ((string)$found === (string)$find) {
                    $rst="congratulations! adrress:".$found." found : ".$index;

                    if(file_put_contents('.utxo', $index.':'.$found)){
                        $keep_looping=false;
                    }else{
                        file_put_contents($dir."/wallet.csv",$found.",\t".$index."\n");
                    }
                }else{
                    $rst="adrress Not found! \n last address found: ".$found;
                }
            }

            $index=$this->Add($index,1);
            $tried++;

            if ($tried>=$max) {
                $keep_looping = false;
                $rst= "Max of ".$tried." reached.";
                $last=file_get_contents($dir."/{$block}.index");
                file_put_contents($dir."/index",$index);
                unlink($dir."/{$block}.index");
            }
        }while ($keep_looping);

        $st["debug"]=htmlentities($rst);
        
        return json_encode($st, JSON_PRETTY_PRINT);
    } 

    public function dit($find,$a,$z,$contract="gamegeck")
    {
        $rst="";
        $st=[];
        $st['target']=$find;
        $tried = 0;
        $chainid = $this->encodeHex("53503667495378217807");
        
        $dir=$contract+"/"+$this->encodeHex($a);
        if(!file_exists($dir)){
            mkdir($dir);
        }

        $index= $a;
        $max= $z;
        $st["max"]=$max;
        $block = $this->Add($a,$max);

        $next= $this->Add($index,1);
        $genesis=file_get_contents($dir."/block0");
        $bestblock=file_get_contents($dir."/bestblock");
        $on = bcsub($bestblock,$genesis);
        $onblock= \Afocha::fpad(bcdiv($on, '365098940'),'4','<');

        $keep_looping = true;

        do {
            $found= $this->toAddress($this->encodeHex($index));
            $st["found"]=$found['address'];
            $st["index"]=$index;
            $st["pubkey"]=$found['public_key_compressed'];

            file_put_contents($dir."/block{$onblock}.index", $index);
            file_put_contents($dir."/block{$onblock}.json", $index.":".$found['address'].",", FILE_APPEND);
            file_put_contents($dir."/wallet.d", \Afocha::_text2hex($index.':'.$found['address']."\n"), FILE_APPEND);

            if ((string)$found['address'] === (string)$find) {
                $keep_looping = false;
                $rst="adrress found! last: ".$index;
                file_put_contents('.utxo', $index.':'.$found['address']);
            }elseif ($tried>=$max) {
                $keep_looping = false;
                $rst= "Max of ".$tried." reached.";
                $rst="adrress Not found! \n last address found: ".$found['address'];

                $last=file_get_contents($dir."/block{$onblock}.index");
                file_put_contents($dir."/bestblock",$last);
                unlink($dir."/block{$onblock}.index");
            }
            $index=$this->Add($index,1);
            $tried++;
        }while ($keep_looping);

        $st["debug"]=htmlentities($rst);
        
        return json_encode($st, JSON_PRETTY_PRINT);
    } 

    public function bit($find,$a,$z,$contract="gamegeck")
    {
        $rst="";
        $st=[];
        $st['target']=$find;
        $tried = 0;
        $tx=[];
        $id=[];
        
        $index= $a;
        $max= $z;
        $st["max"]=$max;
        $block = $this->Add($a,$max);

        $next= $this->Add($index,1);
        $keep_looping = true;

        do {
            $found= $this->toAddress($this->encodeHex($index));
            array_push($tx, $found['address']);
            array_push($id, $this->encodeHex($index));

            if ($found['address'] == $find) {
                $keep_looping = false;
                $rst="adrress found! last: ";
                file_put_contents('.utxo', $index.':'.$found['address']);
            }elseif ($tried>=$max) {
                $keep_looping = false;
                $rst= "Max of ".$tried." reached.";
            }
            $index=$this->Add($index,1);
            $tried++;
        }while ($keep_looping);

        $st["debug"]=htmlentities($rst);
        $output = array_combine($id, $tx);
        $st["tx"]=$output;
        $st["height"]=$index;

        
        return $st;
    } 

    /**
     * Returns the complete keypair info array.
     *
     * @return array
     */
    public function getKeypairInfo()
    {
        return $this->keyInfo;
    }

    /**
     * This is the main function for generating a new keypair.
     *
     * @return array  $keyInfo The complete keypair array.
     */
    public function initGen($po)
    {
        $comp_prefix = '';

        $point = $this->GenerateKeyPoint($po);

        if (substr($point['Rx_hex'], 0, 2) == '0x') {
            $point['Rx_hex'] = substr($point['Rx_hex'], 2);
        }

        if (substr($point['Ry_hex'], 0, 2) == '0x') {
            $point['Ry_hex'] = substr($point['Ry_hex'], 2);
        }

        if (substr($point['random_number'], 0, 2) == '0x') {
            $point['random_number'] = $this->decodeHex($point['random_number']);
        }

        if ($this->Modulo('0x' . $point['Ry_hex'], '0x02') == '1') {
            $comp_prefix = '03';
        } else {
            $comp_prefix = '02';
        }

        $this->keyInfo = array(
                               'private_key_hex'       => $this->encodeHex($point['random_number']),
                               'private_key_dec'       => $point['random_number'],
                               'public_key'            => '04' . $point['Rx_hex'] . $point['Ry_hex'],
                               'public_key_compressed' => $comp_prefix . $point['Rx_hex'],
                               'public_key_x'          => $point['Rx_hex'],
                               'public_key_y'          => $point['Ry_hex'],
                              );
        $this->keyInfo['address'] = $this->getAddress();
        $this->keyInfo['script_hash160'] = $this->getScript();

        return $this->keyInfo;
    }

    /**
     * This lightweight function for generating address.
     *
     * @return array of address keys.
     */
    public function toAddress($po)
    {
        $comp_prefix = '';

        if (strtolower(substr($po,0,2))=='0x') {
            $po = $this->decodeHex($po);
        }

        $point = $this->GenerateKeyPoint($po);

        if (strtolower(substr($point['Rx_hex'], 0, 2)) == '0x') {
            $point['Rx_hex'] = substr($point['Rx_hex'], 2);
        }

        if (strtolower(substr($point['Ry_hex'], 0, 2)) == '0x') {
            $point['Ry_hex'] = substr($point['Ry_hex'], 2);
        }

        if (strtolower(substr($point['random_number'], 0, 2)) == '0x') {
            $point['random_number'] = $this->decodeHex($point['random_number']);
        }

        if ($this->Modulo('0x' . $point['Ry_hex'], '0x02') == '1') {
            $comp_prefix = '03';
        } else {
            $comp_prefix = '02';
        }

        $chain = array(
                               'private_key_hex'       => $this->encodeHex($point['random_number']),
                               'private_key_dec'       => $point['random_number'],
                               'public_key'            => '04' . $point['Rx_hex'] . $point['Ry_hex'],
                               'public_key_compressed' => $comp_prefix . $point['Rx_hex'],
                               'public_key_x'          => $point['Rx_hex'],
                               'public_key_y'          => $point['Ry_hex'],
                              );
        $chain['address'] = $this->_getAddress($chain['public_key_compressed']);
        $chain['hash160'] = $this->_getScript($chain['public_key_compressed']);

        return $chain;
    }

    /**
     * Returns the address of a public key value.
     *
     * @param  string
     * @return string
     */
    public function _getAddress($pubkey,$prifix="00")
    {
       $pk= $prifix.$this->_getScript($pubkey);
       
        $addr = $pk.substr(hash('sha256', hash('sha256', pack('H*', $pk), TRUE)), 0, 8);

        $num = gmp_strval(gmp_init($addr, 16), 58);
        $num = strtr($num, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuv', '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
    
        $pad = ''; $n = 0;
        while ($addr[$n] == $prifix[0] && $addr[$n+1] == $prifix[1]) {
            $pad .= '1';
            $n += 2;
        }
    
        return $pad . $num;
    }

    /**
     * Returns the address of a public key value.
     *
     * @param  string
     * @return string
     */
    public function _getScript($pubkey)
    {
        $pk=$pubkey;
        $a=strlen($pk);
        $b=2;
        $z='';
        if(($a%$b)>0){
            $a = $a+1;
            $pk = $pk."0";
        }
        for($i=0;$i<$a;$i+=$b) { 
            $z .= pack('H*', str_replace(array("\r", "\n", ' '), '', substr($pk, $i, $b)));
        }
        return hash('ripemd160', hash('sha256', $z, true));
    }

    public function decodePublicKey($pubk,$prifix="00"){
        $pk= $prifix.$this->encodeScript($pubk);
        
        $addr = $pk.substr(hash('sha256', hash('sha256', pack('H*', $pk), TRUE)), 0, 8);
        $num = gmp_strval(gmp_init($addr, 16), 58);
        $num = strtr($num, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuv', '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
        $pad = ''; $n = 0;
        while ($addr[$n] == '0' && $addr[$n+1] == '0') {
            $pad .= '1';
            $n += 2;
        }
        return $pad.$num;
    }

}
