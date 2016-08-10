  /* Configuration variables */
  window.ssp_key = '[[app:key]]';
  window.ssp_env = 'prd';
  window.ssp_version = 'v1';

  /* Do not edit below this line */
  (function(){
    // Create the ssp funtion, if it does not exist already
    window.ssp = window.ssp || function() {
      (window.ssp.q = window.ssp.q || []).push(arguments)
    }
    var env = window.ssp_env ? ('?env=' + window.ssp_env) : '';
    // Create an async script element using the key and version
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//' + window.ssp_key + '.sspinc.io/' + window.ssp_version + '/ssp.js' + env

    // Insert the script next to the first script element
    var first = document.getElementsByTagName('script')[0];
    first.parentNode.insertBefore(script, first);

    // Add a version to keep track of the snippet
    window.ssp.SNIPPET_VERSION = '1.1.0';
  })();