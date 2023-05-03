
export const shopMegamenu = [
    {
      title: "Shop Page",
      navlink: [['Shop 4 Column', '/FourColumn'], ['Shop Left Sidebar', '/LeftSideBar']]
    },
    {
      title: "product Details Page",
      navlink: [['Product Single', '/SingleProduct'], ['Product Variable', '/VariableProduct']]
    },
  
    {
      title: "Other Shop Pages",
      navlink: [['Cart Page', '/Cart'], ['Checkout Page', '/Checkout'], ['Account Page', '/Account'], ['Login & Register Page', '/Login'],]
    },
  
    {
      title: "Other Shop Pages",
      navlink: [['404 Page', 'url'], ['Privacy Policy', '/Privacy'], ['Faq Page', '/Faq'], ['Coming Soon Page'],]
    },
  
  ]


export const headerData = [
    {
        id : 0,
        title : "Home",
        url : "/"
    },
    {
        id : 0,
        title : "Shop",
        url : "#",
        megaMenu : shopMegamenu
    },
    {
        id : 0,
        title : "Blogs",
        url : "#",
        dropdown : [
            ['Blog Grid Page', '/AllBlog'], ['Blog Single Page', '/BlogDetails']
        ]
    }, 
    {
        id : 0,
        title : "About US",
        url : "About"
    },
    {
        id : 0,
        title : "Contact",
        url : "Contact"
    }
]