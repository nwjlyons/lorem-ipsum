chrome.contextMenus.create(
    {
        "title": "Paste lorem ipsum",
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
