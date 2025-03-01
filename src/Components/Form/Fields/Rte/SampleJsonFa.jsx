const faTitle = "لورم ایپسوم متن ساختگی با تولید سادگی"

const faParagraph = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."

const faRichText = [
    {
        "type": "heading-one",
        "children": [
            {
                "text": faTitle
            }
        ]
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": faParagraph
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
                "text": faTitle,
                "bold": true,
                "italic": true
            }
        ]
    },
    {
        "type": "heading-two",
        "children": [
            {
                "text": faTitle
            }
        ]
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": `${faParagraph.slice(0, 100)} `
            },
            {
                "strikethrough": true,
                "text": "underlined text"
            },
            {
                "text": ` ${faParagraph.slice(0, 100)} `
            },
        ]
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": faTitle,
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
                        "text": faTitle
                    }
                ]
            },
            {
                "type": "list-entity",
                "children": [
                    {
                        "text": faTitle
                    }
                ]
            },
            {
                "type": "list-entity",
                "children": [
                    {
                        "text": faTitle
                    }
                ]
            },
            {
                "type": "list-entity",
                "children": [
                    {
                        "text": faTitle
                    }
                ]
            },
            {
                "type": "list-entity",
                "children": [
                    {
                        "text": faTitle
                    }
                ]
            }
        ]
    },
    {
        "type": "heading-three",
        "children": [
            {
                "text": faTitle
            }
        ]
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": faParagraph
            }
        ]
    },
    {
        "type": "block-quote",
        "children": [
            {
                "text": faParagraph
            }
        ]
    },
    {
        "type": "heading-three",
        "children": [
            {
                "text": faTitle
            }
        ]
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": faParagraph
            }
        ]
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": `${faParagraph.slice(0, 30)} `
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
                "text": ` ${faParagraph.slice(0, 200)}`
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
                        "text": faTitle
                    }
                ]
            },
            {
                "type": "list-entity",
                "children": [
                    {
                        "text": faTitle
                    }
                ]
            },
            {
                "type": "list-entity",
                "children": [
                    {
                        "text": faTitle
                    }
                ]
            },
            {
                "type": "list-entity",
                "children": [
                    {
                        "text": faTitle
                    }
                ]
            }
        ]
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": faTitle,
                "bold": true
            }
        ]
    },
    {
        "type": "paragraph",
        "children": [
            {
                "text": faParagraph,
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
                "text": faTitle,
                "code": true
            }
        ]
    },
    {
        "type": "heading-four",
        "children": [
            {
                "text": faTitle
            }
        ]
    },

    {
        "type": "paragraph",
        "children": [
            {
                "text": faParagraph
            }
        ]
    },
]

export default faRichText
