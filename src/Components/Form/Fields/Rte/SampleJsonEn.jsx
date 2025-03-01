const enTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"

const enParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const enRichText = [

    {
        "type": "heading-one",
        "children": [
            {
                "text": enTitle
            }
        ]
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": enParagraph
            }
        ]
    },
    {
        "alt": "Nice image, watch it",
        "children": [
            {
                "text": ""
            }
        ],
        "type": "image",
        "url": "https://holismdevelopment.blob.core.windows.net/user/00000000-0000-0000-0000-000000000000.webp"
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": enTitle,
                "bold": true,
                "italic": true
            }
        ]
    },
    {
        "type": "heading-two",
        "children": [
            {
                "text": enTitle
            }
        ]
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": `${enParagraph.slice(0, 100)} `
            },
            {
                "strikethrough": true,
                "text": "underlined text"
            },
            {
                "text": ` ${enParagraph.slice(0, 100)} `
            },
        ]
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": enTitle,
                "bold": true
            }
        ]
    },
    {
        "type": "numbered-list",
        "children": [
            {
                "type": "list-entity",
                "children": [
                    {
                        "text": enTitle
                    }
                ]
            },
            {
                "type": "list-entity",
                "children": [
                    {
                        "text": enTitle
                    }
                ]
            },
            {
                "type": "list-entity",
                "children": [
                    {
                        "text": enTitle
                    }
                ]
            },
            {
                "type": "list-entity",
                "children": [
                    {
                        "text": enTitle
                    }
                ]
            },
            {
                "type": "list-entity",
                "children": [
                    {
                        "text": enTitle
                    }
                ]
            }
        ]
    },
    {
        "type": "heading-three",
        "children": [
            {
                "text": enTitle
            }
        ]
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": enParagraph
            }
        ]
    },
    {
        "type": "block-quote",
        "children": [
            {
                "text": enParagraph
            }
        ]
    },
    {
        "type": "heading-three",
        "children": [
            {
                "text": enTitle
            }
        ]
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": enParagraph
            }
        ]
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": `${enParagraph.slice(0, 30)} `
            },
            {
                "children": [
                    {
                        "text": "high-quality content"
                    }
                ],
                "href": "https://www.google.com/",
                "isDownload": false,
                "target": "_self",
                "type": "link"
            },
            {
                "text": ` ${enParagraph.slice(0, 200)}`
            }
        ]
    },
    {
        "type": "bulleted-list",
        "children": [
            {
                "type": "list-entity",
                "children": [
                    {
                        "text": enTitle
                    }
                ]
            },
            {
                "type": "list-entity",
                "children": [
                    {
                        "text": enTitle
                    }
                ]
            },
            {
                "type": "list-entity",
                "children": [
                    {
                        "text": enTitle
                    }
                ]
            },
            {
                "type": "list-entity",
                "children": [
                    {
                        "text": enTitle
                    }
                ]
            }
        ]
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": enTitle,
                "bold": true
            }
        ]
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": enParagraph,
            }
        ]
    },
    {
        "alt": "Nice image, watch it",
        "children": [
            {
                "text": ""
            }
        ],
        "type": "image",
        "url": "https://holismdevelopment.blob.core.windows.net/user/00000000-0000-0000-0000-000000000000.webp"
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": enTitle,
                "code": true
            }
        ]
    },
    {
        "type": "heading-four",
        "children": [
            {
                "text": enTitle
            }
        ]
    },

    {
        "type": "paragraph",
        "children": [
            {
                "text": enParagraph
            }
        ]
    },
]

export default enRichText
