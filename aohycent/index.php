<!DOCTYPE html>
<avm>
    <head>
        <title>Lagendary Arena - Larena</title>
        <meta meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes">
        <link rel="icon" href="../cdn/img/ohycent.png" type="image/png">
        <link rel="stylesheet" type="text/css" href="../cdn/css/larena.css">
        <script src="../cdn/js/bowinc-ui.js"></script>
    </head>
    <body>
        <nav title="Larena Navigation Bar">
            <div>
                <mark id="debuger" class=""></mark>
                <form id="avmFormSearch" action="" method="post">
                <input type="text" name="avmInputSearchTag" id="amItShTg" placeholder="No active Dapp">
                    <input type="text" name="avmInputSearch" id="amItSh" placeholder="Search bowchain or enter address">
                    <input type="button" onclick="javascript: avm.submitSearch()" value="GO">
                </form>
            </div>
            <!--<div>
                <input type="text" name="avmSearchOutput" id="amOtSh" placeholder="No active Dapp">
            </div>-->
        </nav>
        <screen id="bowLarenaViewMain">
            <iframe src="data:text/html;base64,PGNlbnRlcj5MZWdlbmRhcnkgQXJlbmEgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxNiIgZGF0YS12aWV3LWNvbXBvbmVudD0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi12ZXJpZmllZCBtci0yIj48cGF0aCBzdHlsZT0iZmlsbDojMDA5OTAwIiBkPSJtOS41ODUuNTIuOTI5LjY4Yy4xNTMuMTEyLjMzMS4xODYuNTE4LjIxNWwxLjEzOC4xNzVhMi42NzggMi42NzggMCAwIDEgMi4yNCAyLjI0bC4xNzQgMS4xMzljLjAyOS4xODcuMTAzLjM2NS4yMTUuNTE4bC42OC45MjhhMi42NzcgMi42NzcgMCAwIDEgMCAzLjE3bC0uNjguOTI4YTEuMTc0IDEuMTc0IDAgMCAwLS4yMTUuNTE4bC0uMTc1IDEuMTM4YTIuNjc4IDIuNjc4IDAgMCAxLTIuMjQxIDIuMjQxbC0xLjEzOC4xNzVhMS4xNyAxLjE3IDAgMCAwLS41MTguMjE1bC0uOTI4LjY4YTIuNjc3IDIuNjc3IDAgMCAxLTMuMTcgMGwtLjkyOC0uNjhhMS4xNzQgMS4xNzQgMCAwIDAtLjUxOC0uMjE1TDMuODMgMTQuNDFhMi42NzggMi42NzggMCAwIDEtMi4yNC0yLjI0bC0uMTc1LTEuMTM4YTEuMTcgMS4xNyAwIDAgMC0uMjE1LS41MThsLS42OC0uOTI4YTIuNjc3IDIuNjc3IDAgMCAxIDAtMy4xN2wuNjgtLjkyOGMuMTEyLS4xNTMuMTg2LS4zMzEuMjE1LS41MThsLjE3NS0xLjE0YTIuNjc4IDIuNjc4IDAgMCAxIDIuMjQtMi4yNGwxLjEzOS0uMTc1Yy4xODctLjAyOS4zNjUtLjEwMy41MTgtLjIxNWwuOTI4LS42OGEyLjY3NyAyLjY3NyAwIDAgMSAzLjE3IDBaTTcuMzAzIDEuNzI4bC0uOTI3LjY4YTIuNjcgMi42NyAwIDAgMS0xLjE4LjQ4OWwtMS4xMzcuMTc0YTEuMTc5IDEuMTc5IDAgMCAwLS45ODcuOTg3bC0uMTc0IDEuMTM2YTIuNjc3IDIuNjc3IDAgMCAxLS40ODkgMS4xOGwtLjY4LjkyOGExLjE4IDEuMTggMCAwIDAgMCAxLjM5NGwuNjguOTI3Yy4yNTYuMzQ4LjQyNC43NTMuNDg5IDEuMThsLjE3NCAxLjEzN2MuMDc4LjUwOS40NzguOTA5Ljk4Ny45ODdsMS4xMzYuMTc0YTIuNjcgMi42NyAwIDAgMSAxLjE4LjQ4OWwuOTI4LjY4Yy40MTQuMzA1Ljk3OS4zMDUgMS4zOTQgMGwuOTI3LS42OGEyLjY3IDIuNjcgMCAwIDEgMS4xOC0uNDg5bDEuMTM3LS4xNzRhMS4xOCAxLjE4IDAgMCAwIC45ODctLjk4N2wuMTc0LTEuMTM2YTIuNjcgMi42NyAwIDAgMSAuNDg5LTEuMThsLjY4LS45MjhhMS4xNzYgMS4xNzYgMCAwIDAgMC0xLjM5NGwtLjY4LS45MjdhMi42ODYgMi42ODYgMCAwIDEtLjQ4OS0xLjE4bC0uMTc0LTEuMTM3YTEuMTc5IDEuMTc5IDAgMCAwLS45ODctLjk4N2wtMS4xMzYtLjE3NGEyLjY3NyAyLjY3NyAwIDAgMS0xLjE4LS40ODlsLS45MjgtLjY4YTEuMTc2IDEuMTc2IDAgMCAwLTEuMzk0IDBaTTExLjI4IDYuNzhsLTMuNzUgMy43NWEuNzUuNzUgMCAwIDEtMS4wNiAwTDQuNzIgOC43OGEuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOEw3IDguOTRsMy4yMi0zLjIyYS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJaIj48L3BhdGg+PC9zdmc+PC9jZW50ZXI+ICAg" name="afovirtual" id="avmFrameMain"></iframe>
        </screen>
        <taskbar class="text-center">
            <button id="ctlF12"><a href="/" target="afovirtual">🛠️</a></button>        
        </taskbar>
        <script type="text/javascript" src="../cdn/js/bowinc-web3.js"></script>
        <script>
            var timeoutID1, timeoutID2;
            var avm = function(){};

            avm.address = "aohycent.ntf";
            avm.ip = "127.0.0.1";
            avm.port = "3666";
            avm.dom = window.document;
            
            var bLViewMain = document.getElementById("bowLarenaViewMain");
            avm.browser= document.querySelector("#avmFormSearch");

            avm.localhost = "/afocha/.avm/BOWINC.txt";

            avm.submitSearch = function(){
                amfm = avm.dom.querySelector("#avmFrameMain");
                ri = avm.dom.querySelector("#amItSh");
                rii = avm.dom.querySelector("#amItShTg");
                rl = encodeURI(ri.value);
                ra = Bitcoin.Base58.encode(rl);
                amfm.src=rl;
                ri.value=rl;
                rii.value=ra;
            };
            form=document.forms['avmFormSearch'];
            form.on('submit',function(){
                avm.submitSearch();
            })
            avm.getTimeStampId = function() {
                r = new Date().getTime();
                return r.toString(16);
            };
            avm.sendNotify = function(content) {
                if (!bowinc.isArray(content)) {
                    return false;
                }
                BowNotify.create(content.title,{
                    body: content.body,
                    icon: content.icon,
                    tag: content.tag,
                    id: content.id??avm.getTimeStampId(),
                    timeout: content.timeout,
                    vibrate: [100,50,100],
                    onClick: function(){
                        window.open(content.link);
                    }
                });
            };

/**
 * Prints the given error message.
 * @param {string} msg - The error message to print.
 */
function error(msg) {  // eslint-disable-line no-unused-vars
  if (timeoutID1) {
    window.clearTimeout(timeoutID1);
  }
  if (timeoutID2) {
    window.clearTimeout(timeoutID2);
  }
  var element = document.getElementById('msg');
  element.innerHTML = msg;
  element.className = 'error';
  timeoutID1 = window.setTimeout(function() {
    if (element.className !== 'error') {
      return;
    }
    element.className = 'error-hide';
    timeoutID2 = window.setTimeout(function() {
      element.innerHTML = '';
      element.className = '';
    }, 500);
  }, 10000);
}

/**
 * Prints the given informational message.
 * @param {string} msg - The information message to print.
 */
function info(msg) {
  var element = document.getElementById('msg');
  element.innerHTML = msg;
  element.className = 'info';
}

/**
 * Converts an address object into a dictionary.
 * @param {PaymentAddress} addr - The address to convert.
 * @return {object} The resulting dictionary.
 */
function toDictionary(addr) {  // eslint-disable-line no-unused-vars
  var dict = {};
  if (addr) {
    dict.country = addr.country;
    dict.region = addr.region;
    dict.city = addr.city;
    dict.dependentLocality = addr.dependentLocality;
    dict.addressLine = addr.addressLine;
    dict.postalCode = addr.postalCode;
    dict.sortingCode = addr.sortingCode;
    dict.languageCode = addr.languageCode;
    dict.organization = addr.organization;
    dict.recipient = addr.recipient;
    dict.careOf = addr.careOf;
    dict.phone = addr.phone;
  }
  return dict;
}

/**
 * Called when the task request is complete.
 * @param {string} message - The human readable message to display.
 * @param {Response} resp - The runTask response.
 */
function done(message, resp) {  // eslint-disable-line no-unused-vars
  var element = document.getElementById('contents');
  element.innerHTML = message;

  var shippingOption = resp.shippingOption ?
      'shipping option: ' + resp.shippingOption + '<br/>' :
      '';

  var shippingAddress = resp.shippingAddress ?
      'shipping address: ' +
          JSON.stringify(toDictionary(resp.shippingAddress), undefined, 2) +
          '<br/>' :
      '';

  var instrument =
      'instrument:' + JSON.stringify(resp.details, undefined, 2) + '<br/>';

  var method = 'method: ' + resp.methodName + '<br/>';
  var email = resp.payerEmail ? 'email: ' + resp.payerEmail + '<br/>' : '';
  var phone = resp.payerPhone ? 'phone: ' + resp.payerPhone + '<br/>' : '';


  info(email + phone + shippingOption + shippingAddress + method + instrument);
}
document.write(avm.getTimeStampId());
    </script>
    </body>
</avm>