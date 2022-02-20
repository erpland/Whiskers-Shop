const defaultProducts = [
    {
        "brand": `Ardbeg`,
        "name": `An Oa`,
        "region": `Islay`,
        "age": `No Age Statement`,
        "price": 49,
        "sale_price": 39.5,
        "type": `Single Malt`,
        "country": `Scotland`,
        "abv": 46.6,
        "qty": 0,
        "img": `../shop/ardbeg-an-oa-ps.jpg`,
        "description": `The latest addition to the Ardbeg range, An Oa takes its name from the Mull of Oa, one of the most untamed parts of Islay with cliffs towering over the tempestuous Atlantic Ocean on one side and the calm shelter of the southern coast on the other. The contrast is reflected in the liquid, marrying Pedro Ximenez sweetness, virgin charred oak spice and a high proportion of ex-bourbon casks giving an intense hallmark Ardbeg flavour.Bottled at 46.6% abv without chill filtration, the nose is subtly smoky with creamy toffee and aniseed atop fruity peach and banana notes. The palate is smooth and creamy with orange chocolate, treacle, smoky tea leaves and sweet spices. Gentle aniseed and hickory linger with subtle smoke on the finish.`,
        "index": 0,
        'sweet': 2,
        'floral': 1,
        'fruit': 1,
        'body': 3,
        'richness': 3,
        'smoke': 4,
        'wine': 2,

    },
    {
        "brand": `Balvenie`,
        "name": `12 DoubleWood`,
        "region": `Speyside`,
        "age": `12`,
        "price": 49.87,
        "sale_price": 45.65,
        "type": `Single Malt`,
        "country": `Scotland`,
        "abv": 40,
        "qty": 0,
        "img": `../shop/balvenie_12yo_doublewood_ps.jpg`,
        "description": `Balvenie DoubleWood is, to not much surprise, aged in two kinds of oak casks! It was firstly matured in refill American oak casks before it was treated to a finish in first fill European oak Oloroso sherry butts for an additional nine months. The expression was launched in 1993, and has become a somewhat iconic whisky over the years. Even at 12 years old, this rich and complex dram is an excellent example of what the Balvenie distillery can craft.`,
        "index": 1,
        'sweet': 4,
        'floral': 2,
        'fruit': 3,
        'body': 2,
        'richness': 2,
        'smoke': 0,
        'wine': 3,
    },
    {
        "brand": `Lagavulin`,
        "name": `16`,
        "region": `Islay`,
        "age": `16yo`,
        "price": 70.23,
        "sale_price": 68.20,
        "type": `Single Malt`,
        "country": `Scotland`,
        "abv": 46,
        "qty": 0,
        "img": `../shop/lagavulin_16yo_ps.jpg`,
        "description": `A much sought-after single malt Scotch whisky with the massive peat-smoke that's typical of southern Islay - but also offering richness and a dryness that turns it into a truly interesting tipple. The 16 year old has truly become a benchmark Islay dram from the Lagavulin distillery.
        If you're looking for a food pairing for this beauty, try intensely flavoured salty blue cheeses, which complement the intense, peat rich, sweet and salty character of this Lagavulin wonderfully.`,
        "index": 2,
        'sweet': 2,
        'floral': 1,
        'fruit': 1,
        'body': 4,
        'richness': 4,
        'smoke': 4,
        'wine': 1,

    },
    {
        "brand": `The Macallan`,
        "name": `Rare Cask`,
        "region": `Speyside`,
        "age": `No Age Statement`,
        "price": 230,
        "sale_price": 0,
        "type": `Single Malt`,
        "country": `Scotland`,
        "abv": 43,
        "qty": 0,
        "img": `../shop/the-macallan-rare-cask.jpg`,
        "description": `A much sought-after single malt Scotch whisky with the massive peat-smoke that's typical of southern Islay - but also offering richness and a dryness that turns it into a truly interesting tipple. The 16 year old has truly become a benchmark Islay dram from the Lagavulin distillery.
        If you're looking for a food pairing for this beauty, try intensely flavoured salty blue cheeses, which complement the intense, peat rich, sweet and salty character of this Lagavulin wonderfully.`,
        "index": 3,
        'sweet': 3,
        'floral': 2,
        'fruit': 3,
        'body': 4,
        'richness': 3,
        'smoke': 1,
        'wine': 5,
    },
    {
        "brand": `Glenmorangie`,
        "name": `Signet`,
        "region": `Highland`,
        "age": `No Age Statement`,
        "price": 145.83,
        "sale_price": 130.90,
        "type": `Single Malt`,
        "country": `Scotland`,
        "abv": 46,
        "qty": 0,
        "img": `../shop/glenmorangie_signet_ps.jpg`,
        "description": `Undoubtedly the richest whisky in the Glenmorangie range, a marriage of unique and rare whiskies, with the oldest distilled over 30 years ago back when the distillery still malted its own barley on site. The result of a lifetime’s experience, this is the richest whisky in the Glenmorangie range.
        A melting sweetness is followed by an explosive spiciness, thanks to its maturation in the ‘designer casks’ made exclusively for Glenmorangie from American white oak.`,
        "index": 4,
        'sweet': 3,
        'floral': 4,
        'fruit': 3,
        'body': 4,
        'richness': 4,
        'smoke': 1,
        'wine': 5,

    },
    {
        "brand": `Aberfeldy`,
        "name": `15`,
        "region": `Highland`,
        "age": `15yo`,
        "price": 52.49,
        "sale_price": 0,
        "type": `Single Malt`,
        "country": `Scotland`,
        "abv": 43,
        "qty": 0,
        "img": `../shop/aberfeldy_15yo_ps.jpg`,
        "description": `This Highland single malt has been aged for 15 years with a finish in French red wine casks adding rich red fruit complexity to compliment the honeyed oak profile. The dram opens with aromas of red berries, orchard fruits and honey, moving to a palate of rich cocoa spice finishing up deliciously dry.`,
        "index": 5,
        'sweet': 3,
        'floral': 4,
        'fruit': 2,
        'body': 3,
        'richness': 4,
        'smoke': 1,
        'wine': 3,
    },
    {
        "brand": `Auchentoshan`,
        "name": `18`,
        "region": `Lowland`,
        "age": `15yo`,
        "price": 80,
        "sale_price": 75.6,
        "type": `Single Malt`,
        "country": `Scotland`,
        "abv": 43,
        "qty": 0,
        "img": `../shop/auchentoshan-18-yo-ps.jpg`,
        "description": `Auchentoshan whisky distillery was founded in 1823 by John Bulloch, a grain merchant who took out a distiller’s licence as a way of using up surplus barley. A bomb crater from World War II behind the distillery now forms the pond which supplies cooling water to the condensers. Production resumed after the war in 1948 but every litre of whisky made went into blended Scotch – Auchentoshan was reputed to lend a smoothness and a ‘brandy-like character’ to the mix. Only in the 1970s was it first bottled by its owner as a single malt, but now there is a core range of six expressions, including this 18 Years Old.'`,
        "index": 6,
        'sweet': 4,
        'floral': 2,
        'fruit': 5,
        'body': 3,
        'richness': 2,
        'smoke': 1,
        'wine': 2,
    },
    {
        "brand": `Glen Scotia`,
        "name": `1999 #455`,
        "region": `Campbeltown`,
        "age": `No Age Statement`,
        "price": 112.20,
        "sale_price": 0,
        "type": `Single Malt`,
        "country": `Scotland`,
        "abv": 58.4,
        "qty": 0,
        "img": `../shop/glenscotia_1999_singlecask_ps.jpg`,
        "description": `Originally distilled and filled to its cask in the year 1999 and eventually bottled at a strong 58.4% (cask strength) in April 2019, this rare gem from Glen Scotia has only produced 196 bottles exclusively for The Whisky Shop. Taking influence from the bourbon cask that it was matured in, the whisky is light in colour and sweet on the nose with hints of toffee and vanilla swirling through the glass. The palate is strong with alcohol at first but quickly mellows into a sweet flavour of soft honey and melting toffee that passes and gives way to a refreshing burst of citrus fruits. The finish continues the sweet theme with strong notes of barley sugar that bring the complexity of this malt to a warm but fresh finally `,
        "index": 7,
        'sweet': 4,
        'floral': 3,
        'fruit': 2,
        'body': 2,
        'richness': 3,
        'smoke': 2,
        'wine': 2,


    },
    {
        "brand": `Johnnie Walker`,
        "name": `Blue Label`,
        "region": `Other`,
        "age": `No Age Statement`,
        "price": 195.20,
        "sale_price": 183.37,
        "type": `Blend`,
        "country": `Scotland`,
        "abv": 40,
        "qty": 0,
        "img": `../shop/johnniewalker_bluelabel_200thanniversary_ss1.jpg`,
        "description": `Johnnie Walker Blue Label 200th Anniversary Limited Edition celebrates the whisky's 200-year journey from Scotland to the four corners of the world, including Sydney, London, San Francisco and New York. The beautiful and bespoke illustration on the pack design pays homage to these cities that have been part of Johnnie Walker's story over the past 200 years.  
        The rare casks used in the blending of Johnnie Walker Blue Label are drawn from the largest reserves of whisky in the world. The casks are hand-selected and set aside for their exceptional quality, character and flavour. They are truly special, with only 1 in 10,000 containing whisky of sufficient character to deliver its remarkably smooth signature taste. `,
        "index": 8,
        'sweet': 4,
        'floral': 2,
        'fruit': 3,
        'body': 3,
        'richness': 2,
        'smoke': 1,
        'wine': 3,


    },
    {
        "brand": `Black Bull`,
        "name": `Kyloe`,
        "region": `Other`,
        "age": `No Age Statement`,
        "price": 28.0,
        "sale_price": 0,
        "type": `Blend`,
        "country": `Scotland`,
        "abv": 50,
        "qty": 0,
        "img": `../shop/blackbull_kyloe_ss.jpg`,
        "description": `Kyloe (pronounced Kahy-loh) is inspired by the hardy breed of highland cattle, known to brace the powerful elements of the Scottish Highlands and Islands. Blended at a high ratio of malt to grain, Kyloe is bottled at 50% abv and free from chill filtration. The nose has aromas of toffee apple, pear, clementine, brown sugar and toasted oak. The palate showcases hazelnuts, milk chocolate, and raisins. The finish is oaky with gentle vanilla. `,
        "index": 9,
        'sweet': 5,
        'floral': 4,
        'fruit': 4,
        'body': 4,
        'richness': 2,
        'smoke': 1,
        'wine': 1,

    },
    {
        "brand": `Elijah Craig`,
        "name": `Small Batch`,
        "region": `Other`,
        "age": `No Age Statement`,
        "price": 45.45,
        "sale_price": 0,
        "type": `Bourbon`,
        "country": `USA`,
        "abv": 47,
        "qty": 0,
        "img": `../shop/ElijahCraig .jpeg`,
        "description": `This is a non-age statement bourbon created from spirit aged between eight and twelve years. A small batch expression, this one from Elijah Craig replaces their much-loved 12-year-old. Lots of roasted nuts on the palate, with sweet vanilla, dark fruits, coconut and caramel. Works great in an Old Fashioned.`,
        "index": 10,
        'sweet': 5,
        'floral': 3,
        'fruit': 4,
        'body': 4,
        'richness': 2,
        'smoke': 1,
        'wine': 2,


    },
    {
        "brand": `Redbreast`,
        "name": `Lustau`,
        "region": `Other`,
        "age": `10yo`,
        "price": 60,
        "sale_price": 55.5,
        "type": `Single Malt`,
        "country": `Ireland`,
        "abv": 46,
        "qty": 0,
        "img": `../shop/redbreast_lustau_ps.jpg`,
        "description": `Crafted at the Midleton Distillery in Ireland, this single malt is made from malted and unmalted barley, triple distilled in copper pot stills and matured in Oloroso sherry casks from the renowned Bodegas Lustau in Jerez de la Frontera, Spain. The ultimate sherried style of Redbreast.
        The nose is rich in dark fruits, with figs, dates and prunes, before marzipan and toasted oak. The palate is silky smooth with a balance of rich sherry notes and oak spice, before a smooth and enduring finish with lingering Oloroso and Spanish oak notes.`,
        "index": 11,
        'sweet': 5,
        'floral': 4,
        'fruit': 4,
        'body': 5,
        'richness': 2,
        'smoke': 1,
        'wine': 1,

    },
    {
        "brand": `Yamazaki`,
        "name": `18`,
        "region": `Other`,
        "age": `10yo`,
        "price": 695,
        "sale_price": 687.32,
        "type": `Single Malt`,
        "country": `Japan`,
        "abv": 43,
        "qty": 0,
        "description": `Yamazaki is Suntory's flagship single malt. The surprising, delicate yet profound experience of a Japanese single malt was born at Yamazaki.
        Spiritual and deep, its signature multi-layered taste is highly praised by whisky connoisseurs all over the world. Today, Yamazaki is not only the No.1 single malt whisky in Japan, but is enjoyed in more than thirty-five countries.
        The 18 year old is rich with mature autumn fruit and Mizunara (Japanese oak) aroma.`,
        "img": `../shop/yamazaki_18yo_ps.jpg`,
        "index": 12,
        'sweet': 4,
        'floral': 4,
        'fruit': 4,
        'body': 3,
        'richness': 3,
        'smoke': 2,
        'wine': 1,

    },
    {
        "brand": `Ardbeg`,
        "name": `Uigeadail`,
        "region": `Islay`,
        "age": `No Age Statement`,
        "price": 67.00,
        "sale_price": 60.23,
        "type": `Single Malt`,
        "country": `Scotland`,
        "abv": 54.2,
        "qty": 0,
        "img": `../shop/ardbeg_uigeadail_ps.jpg`,
        "description": `This special vatting, Ardbeg Uigeadail (pronounced 'Oog-a-dal,') marries Ardbeg's traditional deep, smoky notes with luscious, raisiny tones of old ex-Sherry casks. It is non chill-filtered at high strength, which retains maximum flavour and gives more body and added depth.An amazingly complex balance between fruit flavours, spice and smoke. A full flavoured whisky with a rich, deep flavour and mouth-coating texture. The sherry cask maturation gives this a stunning sweet warming flavour that complements the aromatic smoky finish. Ardbeg Uigeadail was recently voted by the 100,000 strong Ardbeg Committee as their favourite Ardbeg.`,
        "index": 13,
        'sweet': 4,
        'floral': 1,
        'fruit': 1,
        'body': 5,
        'richness': 3,
        'smoke': 5,
        'wine': 4,
    },
]
export const defaultUsers = [
    {
        firstName: "Ori",
        lastName: "Winboim",
        email: "ori@gmail.com",
        password: "A1!aaaa",
        orders: [
            [Object.assign({}, defaultProducts[0]), Object.assign({}, defaultProducts[1])],
            [Object.assign({}, defaultProducts[5]), Object.assign({}, defaultProducts[3]), Object.assign({}, defaultProducts[9])]
        ],
        ordersInfo: [
            {
                date: "2/15/2022, 1:08:43 PM",
                totalPrice: [defaultProducts[0], defaultProducts[1]].reduce((a, b) => { return a + b.price }, 0)
            },
            {
                date: "2/16/2022, 12:08:43 PM",
                totalPrice: [defaultProducts[5], defaultProducts[3]].reduce((a, b) => { return a + b.price }, 0)
            }
        ]
    },
    {
        firstName: "Kenar",
        lastName: "Ben Shitrit",
        email: "k@g.com",
        password: "A1!aaaa",
        orders: [
            [Object.assign({}, defaultProducts[6]), Object.assign({}, defaultProducts[5])],
            [Object.assign({}, defaultProducts[2]), Object.assign({}, defaultProducts[12]), Object.assign({}, defaultProducts[4])],
            [Object.assign({}, defaultProducts[9])]
        ],
        ordersInfo: [
            {
                date: "2/15/2022, 1:08:43 PM",
                totalPrice: [defaultProducts[6], defaultProducts[5]].reduce((a, b) => { return a + b.price }, 0)
            },
            {
                date: "2/20/2022, 12:08:43 PM",
                totalPrice: [defaultProducts[2], defaultProducts[12], defaultProducts[4]].reduce((a, b) => { return a + b.price }, 0)
            },
            {
                date: "2/20/2022, 12:08:43 PM",
                totalPrice: [defaultProducts[9]].reduce((a, b) => { return a + b.price }, 0)
            }
        ]
    },
    {
        firstName: "Jim",
        lastName: "Beam",
        email: "j@g.com",
        password: "A1!aaaa",
        orders: [
            [Object.assign({}, defaultProducts[0]), Object.assign({}, defaultProducts[1])],
            [Object.assign({}, defaultProducts[2]), Object.assign({}, defaultProducts[3]), Object.assign({}, defaultProducts[4])],
            [Object.assign({}, defaultProducts[5])]
        ],
        ordersInfo: [
            {
                date: "2/17/2022, 11:08:43 PM",
                totalPrice: [defaultProducts[0], defaultProducts[1]].reduce((a, b) => { return a + b.price }, 0)
            },
            {
                date: "2/18/2022, 8:27:13 AM",
                totalPrice: [defaultProducts[2], defaultProducts[3], defaultProducts[4]].reduce((a, b) => { return a + b.price }, 0)
            },
            {
                date: "2/19/2022, 3:18:00 PM",
                totalPrice: [defaultProducts[5]].reduce((a, b) => { return a + b.price }, 0)
            }
        ]
    },
    {
        firstName: "Jerry",
        lastName: "Seinfeld",
        email: "Jerry@gmail.com",
        password: "A1!aaaa",
        orders: [
        ],
        ordersInfo: [
        ]
    },
    {
        firstName: "John",
        lastName: "Lennon",
        email: "lennon@hotmail.com",
        password: "A1!aaaa",
        orders: [
            [Object.assign({}, defaultProducts[0]), Object.assign({}, defaultProducts[1])],
            [Object.assign({}, defaultProducts[5])]
        ],
        ordersInfo: [
            {
                date: "2/16/2022, 3:38:04 PM",
                totalPrice: [defaultProducts[0], defaultProducts[1]].reduce((a, b) => { return a + b.price }, 0)
            },
            {
                date: "2/17/2022, 6:59:10 PM",
                totalPrice: [defaultProducts[5]].reduce((a, b) => { return a + b.price }, 0)
            }
        ]
    },
    {
        firstName: "Thom",
        lastName: "York",
        email: "thom@yahoo.com",
        password: "A1!aaaa",
        orders: [
            [Object.assign({}, defaultProducts[1])],
        ],
        ordersInfo: [
            {
                date: "2/18/2022, 7:11:12 PM",
                totalPrice: [defaultProducts[5]].reduce((a, b) => { return a + b.price }, 0)
            }
        ]
    },
    
]
defaultUsers.map(user => user.orders.map(order => order.map(prod => prod.qty = 1)))
export default defaultProducts
