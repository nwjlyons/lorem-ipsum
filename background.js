chrome.contextMenus.create(
    {
        "title": "Paste 'Lorem ipsum...'",
        "contexts":["editable"],
        "onclick": function(info, tab) 
        {
            chrome.tabs.sendRequest(
                tab.id, 
                {
                    "insertLoremIpsum": true
                }, 
                function(response){ }
            )
        }
    }
);
