
export const shopMegamenu = [
  {
    title: "Shop Page",
    navlink: [['Shop 4 Column', '/fourColumn'], ['Shop Left Sidebar', '/leftSideBar']]
  },
  {
    title: "product Details Page",
    navlink: [['Product Single', '/singleProduct'], ['Product Variable', '/variableProduct']]
  },

  {
    title: "Other Shop Pages",
    navlink: [['Cart Page', '/cart'], ['Checkout Page', '/checkout'], ['Account Page', '/account'], ['Login & Register Page', '/login'],]
  },

  {
    title: "Other Shop Pages",
    navlink: [['404 Page', 'url'], ['Privacy Policy', '/privacy'], ['Faq Page', '/faq'], ['coming Soon Page'],]
  },

]


export const headerData = [
  {
    id: 0,
    title: "Home",
    url: "/"
  },
  {
    id: 0,
    title: "Shop",
    url: "/",
    megaMenu: shopMegamenu
  },
  
  {
    id: 0,
    title: "Blogs",
    url: "/",
    dropdown: [
      {
        title: "Blog Grid Page",
        url: "/blog"
      },

      {
        title: "Blog Single Page",
        url: "/singleBlog"
      },


    ]
  },

  {
    id: 0,
    title: "About US",
    url: "about"
  },
  {
    id: 0,
    title: "Contact",
    url: "Contact"
  }
]
