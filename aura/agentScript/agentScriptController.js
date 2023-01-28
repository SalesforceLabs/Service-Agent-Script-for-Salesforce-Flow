({
    onInit: function(cmp) {
        // check that a live agent record is in use
        var recordId = cmp.get('v.recordId');
        if (recordId && recordId.substring(0, 3) === '570') {
            cmp.set('v.showChatButton', true);
        }
    },

    copyToClipboard: function(cmp) {
        // get value to copy
        var value = cmp.get('v.script');

        // create a hidden dummy input to copy the string
        var dummy = document.createElement('textarea');
        dummy.style.position = 'absolute';
        dummy.style.left = '-10000px';

        // append dummy to cmp
		document.body.appendChild(dummy);

        // populate dummy input with value
        dummy.value = value;

        // select dummy input
        dummy.select();

        // copy to clipboard
        var copyCmdSupported = document.execCommand('copy');

        // remove dummy input
        document.body.removeChild(dummy);
    },

    copyToChat: function(cmp) {
        var recordId = cmp.get('v.recordId');
        if (recordId) {
            cmp.find('conversationAPI').setAgentInput({ recordId: recordId.substring(0, 15), message: { text: cmp.get('v.script') } });
        }
    }
})