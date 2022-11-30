const products = [

    
    {
       _id: 1,
       name: "Hamburger",
       price: 200,
       image: "https://th.bing.com/th/id/OIP.oTOvw5rSleg4NTIx3eVTFQHaF_?w=211&h=180&c=7&r=0&o=5&pid=1.7"
   },
   {
       _id:2,
       name: "Fries",
       price: 100,
       image: "https://th.bing.com/th/id/OIP.An-_RRRor_xPiytdVbE61wAAAA?w=167&h=160&c=7&r=0&o=5&pid=1.7"
   },
   {
       _id:3,
       name: "Coke",
       price: 50,
       image: "data:image/jpeg;base64,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"
   },
   {
       _id:4,
       name: "Pepsi",
       price: 50,
       image: "https://th.bing.com/th/id/R.911582003908191ab7c8aa6c7b8d1843?rik=Z7Z4tCoZIjTyCQ&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-pepsibottle-food-pepsi-object-drink-beverage-9415246205948fzcp.png&ehk=IL7FkeLACUMM2HQQhRhtYh0Hc9ETMHFEvIToebfgt14%3d&risl=&pid=ImgRaw&r=0"
   }
   
   ]
   
   export default products