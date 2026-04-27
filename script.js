// ==========================================
// 1. DATA & CONFIG
// ==========================================
const PRODUCT_LINKS = [
    { 
        url: "https://amzn.to/48dXsYe", 
        image: "https://m.media-amazon.com/images/I/81YXtph65uL._SL1500_.jpg",
        title: "LG 139 cm (55 inches) OLED B2 AI Series 4K Ultra HD (3840 x 2160) Smart webOS OLED TV 55B2PSA (Black)",
        price: "1,16,490.00 with 21 percent savings-21% M.R.P.: ₹1,47,490.00",
        review: "Maine LG OLED B2 55-inch 4K Smart TV ko home setup me use kiya aur honestly yeh ek proper premium viewing experience deta hai, lekin kuch trade-offs ke saath. Sabse pehle picture quality next level hai—OLED panel ki wajah se blacks bilkul deep aur colors kaafi vibrant lagte hain, especially movies aur OTT content dekhte waqt cinematic feel aata hai. 120Hz refresh rate hone ki wajah se sports aur gaming me motion smooth rehta hai, aur PS5/Xbox pe gaming kaafi solid experience deta hai . Smart features bhi kaafi smooth lage—webOS fast hai, apps easily access ho jati hain aur overall UI clean feel deta hai. Design bhi slim aur premium hai, wall mount pe kaafi classy lagta hai. Lekin honestly brightness thodi limitation hai—bahut bright room me kabhi-kabhi screen utni punchy nahi lagti jitni QLED TVs me hoti hai . Sound output bhi average hai, matlab is price pe ek soundbar lena better rahega. Overall ₹1.1–1.2 lakh ke range me yeh TV un logon ke liye best hai jo movies, OTT aur dark-room viewing enjoy karte hain. Agar aapko best picture quality chahiye toh yeh solid choice hai, lekin agar aap bright room me use karte ho ya loud audio chahiye toh thoda compromise feel ho sakta hai.",
        category: "ELECTRONICS" // Screenshot ke hisab se
    },
    { 
        url: "https://amzn.to/3Qp9B6s", 
        image: "https://m.media-amazon.com/images/I/818vnFP09yL._SL1500_.jpg",
        title: "STCL 164 cm (65 inches) 4K UHD Smart QD-Mini LED Google TV 65Q6C",
        price: "67,990.00 with 60 percent savings-60%  M.R.P.: ₹1,69,990.",
        review: "4.8TCL 65Q6CS Mini LED Google TV₹61,990•Mini LED technology enhances contrast and color accuracy.TCL C6K QD-Mini LED 4K TV₹72,990•High-quality 4K resolution with QD-Mini LED for sharp images.4.8TCL 65-inch 4K UHD Smart Google TV₹66,350•Large 65-inch 4K UHD screen with smart Google TV features.4.8 Maine TCL 65Q6C QD-Mini LED 4K Google TV ko kuch time use kiya aur honestly ₹65–70K ke budget me yeh ek powerful value-for-money TV laga. Sabse pehle picture quality ne impress kiya—QD Mini LED panel ki wajah se brightness kaafi high hai aur colors bhi kaafi vibrant dikhte hain, especially HDR content me details clear aati hain. Dark scenes me bhi blacks kaafi achhe handle karta hai (OLED jaisa perfect nahi, but kaafi close feel deta hai) . 144Hz refresh rate hone ki wajah se sports aur gaming me smoothness noticeable hai, aur console gaming ke liye bhi kaafi solid experience milta hai. Google TV interface smooth hai, apps easily chalti hain aur voice control bhi kaam ka hai. Sound bhi average se better laga—Onkyo speakers hone ki wajah se normal TV se thoda powerful feel aata hai, lekin full cinematic experience ke liye soundbar better rahega. Bright rooms me iska performance strong hai",
        category: "ELECTRONICS"
    },
    { 
        url: "https://amzn.to/4mIrlpo", 
        image: "https://m.media-amazon.com/images/I/61kqDPQbHnL._SY741_.jpg",
        title: "Tshirt for Men | Men Polo t-Shirt Shirt | Solid Cotton Rich Polo T Shirt | Collar Tshirts | Half Sleeves | Plain-Regular Fit",
        price: "499.00 with 55 percent savings-55%  M.R.P.: ₹1,099",
        review: "Maine is type ka ₹400–₹500 range wala polo t-shirt daily wear aur casual office use me try kiya aur honestly yeh ek decent “smart casual” option laga. Sabse pehle iska collar design simple t-shirt se thoda upgrade feel deta hai—matlab bina effort ke thoda classy look aa jata hai, jo college, office ya outing sab jagah chal jata hai. Fabric usually cotton-rich ya cotton blend hota hai, toh pehenne me comfortable rehta hai, lekin pure cotton jaisa thick ya premium feel har piece me nahi milta. Fit generally regular hota hai—na zyada tight na loose—lekin kabhi-kabhi sizing thodi inconsistent hoti hai, isliye order karte time size chart dekhna better rahega. Daily use me kaafi practical hai, lekin honestly durability average hi hoti hai—2–3 washes ke baad thoda color dull ya fabric halka feel hone lagta hai, jo is budget range me common hai. Market me ₹300–₹500 ke beech kaafi polo options mil jate hain jo similar quality dete hain . Overall ₹499 me yeh ek “safe choice” hai—agar aapko budget me thoda stylish aur clean look chahiye toh le sakte ho, bas premium fabric ya long-lasting quality expect mat karna.",
        category: "FASHION"
    },
    {   url: "https://amzn.to/4cCrYMv", 
        image: "https://m.media-amazon.com/images/I/71eUwDk8z+L._SX569_.jpg",
        title: "Allen Solly Men’s Polo T‑Shirt | Comfortable Rich Cotton Blend",
        price: "629",
        review: "Dekho bhai, maine The Indian Garage Co Men Slim Fit Solid Mid-Rise Jeans ko try kiya hai, aur mujhe lagta hai ki yeh jeans kaafi achhe hain. Fit sahi hai, material bhi good quality ka hai, aur price bhi reasonable hai. Lekin, ek cheese jo mujhe thodi annoying lagee, woh hai stitching quality. Kabhi-kabhi toh threads loose ho jaate hain. Overall, agar aap ek good slim fit jeans chahte hain, toh yeh option consider kar sakte hain. Lekin, stitching pe thoda dhyan dena padega. 3.5/5 star dena padega, bhai.",
        category: "FASHION"
    },
    {   url: "https://amzn.to/4dYBfAZ",
        image: "https://m.media-amazon.com/images/I/71DtzhzFXDL._SX569_.jpg",
        title: "The Indian Garage Co Men Slim Fit Solid Mid-Rise Jeans",
        price: "1,099",
        review: "Dekho bhai, maine truke Mega 9 earbuds review kiya hai, aur mujhe lagta hai ki ye ek solid product hai. Pehli baat, sound quality toh kamal hai, 24-bit lossless spatial audio ke saath, music sunne ka experience ek dum different hai. Battery life bhi mazedaar hai, 70 hours ka backup milta hai, aur fast charging bhi support karta hai. Design wise bhi ye earbuds stylish hain, leather finish dekhne mein premium lagta hai. Latency bhi kaafi low hai, 40ms, gaming ke liye perfect hai. Aur 4 mics ke saath ENC bhi hai, voice calls clear aur distortion-free hote hain. Overall, ye earbuds paisa wasool hai, bhai. Agar aap true wireless earbuds dhoondh rahe hain, toh truke Mega 9 ek accha option hai.",
        category: "FASHION"
    },
    {   url: "https://amzn.to/4eD58qK",
        image: "https://images-eu.ssl-images-amazon.com/images/I/71R8VsJ07nL._AC_UL210_SR195,210_.jpg",
        title: "Apple iPhone 17 Pro Max 1 TB: 17.42 cm (6.9″) Display with Promotion, A19 Pro Chip, Best Battery Life in Any iPhone Ever, Pro Fusion Camera System, Center Stage Front Camera; Deep Blue",
        price: "1,89,900",
        review: "Maine iPhone 17 Pro Max 1TB ko kaafi time use kiya aur honestly yeh ek proper premium flagship experience deta hai—lekin har kisi ke liye nahi hai. Sabse pehle performance ki baat karu toh A19 Pro chip literally butter smooth chalti hai, heavy gaming, editing ya multitasking me kabhi lag feel nahi hua . Display bhi next level hai—6.9-inch ProMotion screen pe videos aur scrolling dono super smooth aur vibrant lagte hain. Camera iska biggest highlight hai—48MP triple camera setup se photos aur videos bahut detailed aate hain, especially zoom aur low light me noticeable difference dikhta hai . Battery bhi seriously strong lagi mujhe—heavy use ke baad bhi pura din nikal jata hai, jo real life me kaafi important hai .",
        category: "ELECTRONICS"
    },
     {  url: "https://amzn.to/4cFnt3L",
        image: "https://m.media-amazon.com/images/I/71uCAn5-jbL._SL1500_.jpg",
        title: "Samsung Galaxy S26 Ultra 5G (White, 12GB RAM, 256GB Storage) with Built-",
        price: "1,30,999",
        review: "Dekho bhai, maine Samsung Galaxy S26 Ultra 5G ka review kiya hai. Mujhe yeh phone bahut hi impressive laga, khaskar camera toh mind-blowing hai, 200MP! Battery bhi mast hai, 5000mAh se phone din bhar chalta hai. Aur Snapdragon 8 Elite Gen 5 processor se gaming experience toh sabse best hai. Lekin, bhai, price thoda jyada hai, lekin agar aapko high-end features chahiye toh yeh phone perfect hai. Built-in Privacy Display aur AI Phone features bhi very useful hai. Creative Studio bhi kaafi interesting hai. Overall, yeh phone ek solid package hai, agar aap budget nahi dekhte toh definitely go for it, bhai!",
        category: "ELECTRONICS"
     },
     {  url: "https://amzn.to/4vHoX6x",
        image: "https://m.media-amazon.com/images/I/71ZisjnWwHL._SL1500_.jpg",
        title: "truke Mega 9 New Launch True Wireless in Ear Earbuds W/ 24-Bit",
        price: "999",
        review: "Dekho bhai, maine Truke Mega 9 kab liye, aur mujhe bahut accha experience mila. Pehli baat, design toh bahut premium hai, leather finish wala, aur sound quality bhi 24-bit lossless spatial audio ke saath waah wah! 13mm speakers ne bass thoda weak lagaya, lekin overall acha hai. Battery life 70 hours ka claim hai, aur maine dekha toh almost 60 hours toh chalta hai. Fast charging bhi achha hai, 10 minute charge me 10 hours music sun sakte ho. Latency bhi bahut kam hai, 40ms, gaming ke liye perfect hai. 4 mics ENC ke saath call quality bhi clear hai. Toh, agar tum log true wireless earbuds dhoondh rahe ho, toh Truke Mega 9 ek accha option hai, bhai. Thoda mahanga hai, lekin quality ke hisab se sahi hai. 4/5 stars, bhai!!",
        category: "ELECTRONICS"
    },
    {   url: "https://amzn.to/4mLCmGl",
        image: "https://m.media-amazon.com/images/I/41AB0zsbqdL._SY300_SX300_QL70_FMwebp_.jpg",
        title: "truke New Launch Aura Bass V2 Over The Ear Headphone with 50H of Playtime, 40mm Titanium Drivers, Dual Pairing Headset, 40ms Ultra Low Latency, ENC, Premium Design & Comfort - Forest Green",
        price: "1,299",
        review: "Dekho bhai,Maine truke Aura Bass V2 Over The Ear Headphone ko kuch din use kiya aur honestly mixed experience raha. Sound me bass kaafi punchy hai, jo Bollywood aur bass-heavy songs me maza deta hai, lekin kabhi-kabhi mids aur vocals thode dab jaate hain. 50 hours ka battery backup real life me bhi kaafi strong laga—3-4 din easily nikal jate hain normal use me. Comfort theek hai, ear cushions soft hain, par long use me thoda garam feel hone lagta hai. Dual pairing aur low latency gaming ke liye useful features hain, aur connectivity stable mili mujhe. Lekin build quality utni premium nahi lagi—plastic feel aata hai aur long-term durability pe thoda doubt rahega. Overall ₹1300 ke price me yeh headphones casual use aur bass lovers ke liye sahi hain, bas agar aapko balanced sound ya solid build chahiye toh aur options explore karna better rahega.",
        category: "ELECTRONICS"

    },
    {   url: "https://amzn.to/4eAaJOv",
        image: "https://m.media-amazon.com/images/I/41VsmkhaaKL._SY300_SX300_QL70_FMwebp_.jpg",
        title: "Boat Nirvana Ion, 120HRS Battery, Crystal Bionic Sound w/Dual EQ Modes, 4Mics ENx, App Support, Low Latency, IPX4, v.5.2 Bluetooth Earbuds, TWS Ear Buds Wireless Earphones with mic (Charcoal Black)",
        price: "1,699",
        review: "Dekho bhai, Agar budget earbuds dekh rahe ho toh boAt Nirvana Ion TWS Earbuds kaafi popular choice hai. Sabse badi highlight iska massive battery backup hai—120 hours tak ka claim hai, jo real use me bhi kaafi lamba chalta hai aur baar-baar charge karne ka tension nahi rehta. Sound quality theek-thaak hai, bass lovers ko pasand aayega aur dual EQ modes se thoda customization mil jata hai. Calling ke liye 4 mics diye gaye hain, toh normal calls clear rehti hain, lekin heavy traffic ya noisy jagah me thodi disturbance aa sakti hai. Gaming ya videos ke liye low latency mode useful hai, aur app support se controls aur settings manage karna easy ho jata hai. Overall ₹1700 ke aas-paas price me yeh earbuds value for money hain, especially agar aapko long battery aur punchy sound chahiye, bas audiophile-level clarity expect mat karna.",
        category: "ELECTRONICS"
    },
    {   url: "https://amzn.to/4mOLJFt",
        image: "https://m.media-amazon.com/images/I/61nFKgi0qPL._SL1500_.jpg",
        title: "OnePlus Nord Buds 3r TWS Earbuds up to 54 Hours Playback, 2-mic Clear Calls, 3D Spatial Audio, AI Translation, 12.4mm Drivers, Dual-Device Connectivity, 47ms Low Latency - Aura Blue",
        price: "1,999",
        review: "Maine OnePlus Nord Buds 3r TWS Earbuds ko daily use me try kiya aur honestly is price range me kaafi balanced experience diya. Sound quality clean hai, bass bhi punchy milta hai aur 12.4mm drivers ki wajah se music aur OTT content dono me clarity achhi lagti hai. Battery iska biggest plus hai—ek baar full charge pe kaafi din nikal jate hain, jo real life me bhi kaafi convenient laga . Calling ke time 2-mic setup normal use me clear rehta hai, lekin heavy noise me thoda struggle karta hai. Gaming aur videos ke liye low latency noticeable hai, lag feel nahi hota. Fit comfortable hai aur long use me bhi problem nahi hui mujhe. Bas ek cheez missing lagi—ANC nahi hai, toh outside noise thoda sunai deta hai. Overall ₹2000 ke around yeh earbuds ek safe aur reliable choice lagte hain, especially agar aapko battery aur stable performance chahiye..",
        category: "ELECTRONICS"
    },
    {   url: "https://amzn.to/3OkXTJz",
        image: "https://m.media-amazon.com/images/I/71hFT7EkGML._SL1500_.jpg",
        title: "OnePlus Nord Buds 3r TWS Earbuds up to 54 Hours Playback, 2-mic Clear Calls, 3D Spatial Audio, AI Translation, 12.4mm Drivers, Dual-Device Connectivity, 47ms Low Latency - Aura Blue",
        price: "699",
        review: "Maine truke Buds Aura TWS Earbuds ko kuch din use kiya aur honestly ₹700 ke budget me yeh kaafi decent nikle. Sabse pehle battery ne impress kiya—company 70 hours bolti hai aur real use me bhi kaafi din chal jate hain bina baar-baar charge ki tension ke . Sound quality bass-heavy side pe hai, 13mm titanium drivers ki wajah se music me punch feel hota hai, lekin vocals aur clarity average level ki hi lagti hai. Calls ke time quad-mic ENC kaam karta hai, normal environment me voice clear rehti hai, par zyada noise me thoda struggle hota hai. Gaming ke liye 40ms low latency noticeable hai—lag kam feel hota hai . Fit aur design comfortable hai daily use ke liye, lekin build quality basic hai, premium feel expect mat karna. Overall ₹699 me yeh earbuds casual users, students aur gaming ke liye value for money hain, bas agar aapko high-quality sound ya long-term durability chahiye toh thoda budget badhana better rahega...",
        category: "ELECTRONICS"
    }, 
    {   url: "https://amzn.to/4cyxfpS",  //women wares
        image: "https://m.media-amazon.com/images/I/61TcjCDi40L._SY741_.jpg",
        title: "Leriya Fashion Kurta Sets for Woman | Co ord Set for Women Stylish | Kurti Set for Woman | Short Kurti for Women Latest | Kurtis | Ethnic Jaipuri Straight Kurta Set with Palazzo Pants | Salwar Suit for Party Outfits",
        price: "499.00 with 75 percent M.R.P.: ₹1,999.",
        review: "Maine Leriya Fashion Kurta Sets for Women ko try kiya aur honestly ₹500 ke around price me yeh ek decent everyday outfit laga. Fabric lightweight aur breathable hai, isliye daily wear ya casual outing ke liye comfortable rehta hai, especially garmi me kaafi achha feel hota hai . Design simple but stylish hai—Jaipuri print aur straight fit look decent lagta hai, lekin real me utna premium finish nahi milta jitna photos me dikhta hai. Stitching theek-thaak hai, par long-term durability average lagti hai, matlab regular use me chal jayega but rough use me jaldi wear ho sakta hai. Fit mostly comfortable hai, bas size thoda check karke lena better rahega. Overall ₹499 me yeh ek value-for-money kurta set hai jo daily use, college ya light outings ke liye sahi hai, bas high-quality ya party-level expectation mat rakhna....",
        category: "FASHION"
    },
    {   url: "https://amzn.to/4w8yBiT",
        image: "https://m.media-amazon.com/images/I/51z5Bm7cmtL._SY741_.jpg",
        title: "GRECIILOOKS Co Ord Set for Women Stylish | Linen Cord Set for Women – Oversized Top and Wide Leg Pants Set for Woman's | Casual Travel Airport Outfit for Summer Co-ord Set",
        price: "699.00 with 65 percent  M.R.P.: ₹1,999.",
        review: "Maine GRECIILOOKS Co Ord Set for Women Stylish Linen Set ko casual wear aur travel ke liye use kiya aur honestly mixed feel aaya. Sabse pehle iska oversized fit kaafi comfortable laga—airport look ya summer outing ke liye bilkul relaxed vibe deta hai, aur aajkal co-ord sets waise bhi kaafi trend me hain kyunki bina effort ke ready look mil jata hai . Fabric lightweight hai (linen-type feel), isliye garmi me pehenne me comfortable lagta hai, lekin pure linen jaisa premium feel nahi aata. Look-wise stylish hai, especially wide-leg pants aur loose top ka combo achha lagta hai, par stitching aur finishing thodi average lagi mujhe. Long use ya frequent wash me durability thodi concern ho sakti hai. Overall ₹699 ke price me yeh ek decent fashion piece hai—agar aapko comfy aur trendy outfit chahiye daily wear ya travel ke liye toh sahi hai, bas high-quality ya perfect fitting expect mat karna...",
        category: "FASHION"
    },
    {   url: "https://amzn.to/4cKvzZc",
        image: "https://m.media-amazon.com/images/I/516wTlM435L._SY741_.jpg",
        title: "Leriya Fashion Co-ord Set For Women Stylish | Kurti Set For Woman | Short Kurti For Woman Latest | Anarkali Suit For Women's | Festive Ethnic Indian Traditional Outfit for Functions & Puja",
        price: "599.00 with 70 percent  M.R.P.: ₹1,999",
        review: "Maine Leriya Fashion Co-ord Set for Women ko festive aur casual dono occasions me try kiya aur honestly ₹600 ke around price me yeh ek decent ethnic outfit laga. Fabric lightweight aur breathable hai, mostly cotton/rayon type feel deta hai, isliye garmi me pehenne me comfortable rehta hai . Design kaafi attractive hai—Anarkali style aur prints photos me kaafi sundar lagte hain, aur real me bhi decent look deta hai, especially puja ya small functions ke liye. Fit generally comfortable hai, lekin stitching aur finishing thodi average lagi mujhe, matlab close se dekhoge toh premium feel nahi aata. Regular use ya occasional wear ke liye theek hai, par heavy festive ya long-term durability ke liye utna strong nahi laga. Overall ₹599 me yeh ek value-for-money outfit hai jo simple functions, college events ya daily ethnic wear ke liye sahi choice hai, bas expectations realistic rakhna....",
        category: "FASHION"
    },
    {   url: "https://amzn.to/4ucLarC",
        image: "https://m.media-amazon.com/images/I/51U3FVQr7RL._SY741_.jpg",
        title: "Women's Pure Cotton Co-Ord Set, Green Kurta with Pant, Floral Embroidered 3/4 Sleeve, Stylish Pocket Design",
        price: "599.00 with 70 percent  M.R.P.: ₹1,999",
        review: "Maine Women’s Pure Cotton Co-Ord Set (Green Kurta Pant) ko daily wear aur casual outings ke liye use kiya aur honestly ₹700 ke budget me yeh kaafi practical outfit laga. Sabse pehle iska fabric comfortable feel hota hai—cotton blend hone ki wajah se garmi me bhi easy lagta hai aur long hours pehenne me issue nahi hota . Floral embroidery simple but classy lagti hai, aur pocket design actually useful hai, sirf show ke liye nahi. Fit overall comfortable hai, lekin thoda loose/relaxed side pe hai toh size select karte time dhyan dena padega. Stitching aur finishing average lagi mujhe—close se dekhne par premium feel nahi aata, par price ke hisaab se acceptable hai. Wash ke baad fabric thoda normal ho jata hai, isliye zyada rough use ke liye nahi bolunga. Overall ₹699 me yeh ek simple, comfortable aur decent-looking co-ord set hai jo daily wear, office ya casual outings ke liye sahi hai, bas high-end quality expect mat karna...",
        category: "FASHION"
    },
    {   url: "https://amzn.to/41RbT0L",
        image: "https://m.media-amazon.com/images/I/61ajdBrtVmL._SX679_.jpg",
        title: "Co Ord Set for Women Stylish Card Set Dress for Women Trendy Top with Plazo Pant Ladies Coord Outfit Modern Wear for Travel Office Casual Look Premium Two Piece Clothing Style",
        price: "751.00 with 62 percent M.R.P.: ₹1,999",
        review: "Maine is type ka ₹700–₹800 range wala co-ord set (jaise SHANTVAN GALLERY Co Ord Set) use kiya aur honestly experience thoda average side pe raha. Look-wise pehle impression me kaafi stylish lagta hai—top + plazo combo trendy feel deta hai aur travel ya casual office wear ke liye easily carry ho jata hai. Fabric generally lightweight hota hai (mostly rayon/crepe type), toh pehenne me comfortable lagta hai, especially garmi me . Lekin quality consistency issue rehta hai—kabhi stitching perfect milti hai, kabhi finishing thodi rough hoti hai. Fit bhi thoda tricky ho sakta hai, kabhi top loose aur bottom tight type mismatch mil jata hai. Wash ke baad fabric thoda normal ho jata hai aur shine kam ho jati hai, toh long-term durability average hi hai. Overall ₹751 ke price me yeh ek “theek-thaak” outfit hai jo casual outings, college ya travel ke liye sahi hai, bas premium quality ya perfect fitting expect mat karna.....",
        category: "FASHION"
    },
    {   url: "https://amzn.to/4mP885r",
        image: "https://m.media-amazon.com/images/I/41YF5GlKMXL._SY741_.jpg",
        title: "Klosia Women Pure Cotton Kurta Palazzo Set | Sleeveless Printed Kurta with Palazzo Pants | Summer Friendly, Office Wear Co-Ord Set",
        price: "599.00 with 76 percent  M.R.P.: ₹2,499.",
        review: "Maine Klosia Women Pure Cotton Kurta Palazzo Set ko daily office wear aur summer outings ke liye use kiya aur honestly ₹600 ke budget me yeh kaafi achha nikla. Sabse best cheez iska pure cotton fabric hai—garmi me kaafi breathable feel hota hai aur poora din pehenne ke baad bhi uncomfortable nahi lagta. Sleeveless design ki wajah se aur bhi airy feel milta hai, especially Ahmedabad jaisi heat me useful hai. Print simple aur decent hai, zyada loud nahi lagta, toh office ya casual wear dono me easily carry ho jata hai. Fit generally comfortable hai aur palazzo bhi kaafi relaxed hai, movement me koi issue nahi hota. Haan, stitching aur finishing perfect nahi hai—close se dekhoge toh thodi basic lagegi, but price ke hisaab se acceptable hai. Overall ₹599 me yeh ek practical aur comfortable outfit hai jo daily wear ke liye kaafi value for money feel hota hai, especially agar aapko comfort priority hai......",
        category: "FASHION"
    },
    {   url: "https://amzn.to/4cMZorS",
        image: "https://m.media-amazon.com/images/I/61KHG9I1rLL._SY741_.jpg",
        title: "Nermosa Women Pure Cotton Kurta Palazzo Set | Sleeveless Printed Kurta with Palazzo Pants | Summer Friendly, Office Wear Co-Ord Set",
        price: "751.00 with 62 percent M.R.P.: ₹1,999",
        review: "Maine Nermosa Women Pure Cotton Kurta Palazzo Set ko daily wear aur office use ke liye try kiya aur honestly ₹600 ke around yeh kaafi achha experience diya. Sabse pehle iska pure cotton fabric genuinely comfortable laga—garmi me sweat absorb karta hai aur poora din pehenne ke baad bhi chipchipa feel nahi hota, jo Indian weather ke liye perfect hai . Sleeveless design aur printed kurta ka combo simple but stylish lagta hai, especially office ya casual outing ke liye ek clean look deta hai. Fit bhi kaafi relaxed hai, palazzo comfortable hai aur movement easy rehti hai. Stitching aur finishing is price range ke hisaab se decent lagi—premium nahi hai but cheap bhi nahi lagta. Wash ke baad color aur fabric mostly stable rehta hai, jo achhi baat hai. Overall ₹599 me yeh ek solid value-for-money co-ord set hai, especially agar aapko summer-friendly, comfortable aur daily use ke liye reliable outfit chahiye...",
        category: "FASHION"
    },
    {   url: "https://amzn.to/4cNsaJ4",
        image: "https://m.media-amazon.com/images/I/71v-he0d40L._SY606_.jpg",
        title: "Pinkmint Women's Pure Cotton Co Ord Set l Kurta Sets for Women |Kurta Sets| Printed Kurta with Pant l Stylish Pocket & 3/4 Sleeve Women Co-ord Set (Avaiable in Plus size)",
        price: "749.00 with 63 percent  M.R.P.: ₹1,999.",
        review: "Maine Pinkmint Women's Printed Kurta Set ko daily wear aur casual outings ke liye use kiya aur honestly thoda mixed experience mila. Sabse pehle iska cotton fabric kaafi comfortable laga—garmi me breathable feel deta hai aur poora din pehenne me issue nahi hota . Design simple aur decent hai, printed pattern aur 3/4 sleeves ek clean everyday look dete hain, aur pocket ka feature actually useful laga. Lekin quality consistency thodi hit-or-miss lagi—stitching aur finishing kabhi achhi milti hai, kabhi thodi basic feel hoti hai. Fit generally relaxed hai, plus size option hona ek achhi baat hai, lekin exact fitting ke liye size carefully choose karna padta hai. Wash ke baad fabric thoda normal ho jata hai aur naya jaisa finish nahi rehta. Overall ₹749 ke around yeh ek average se upar value-for-money outfit hai—daily use, office ya casual wear ke liye theek hai, bas premium quality ya perfect finishing expect mat karna......",
        category: "FASHION"
    },
    {   url: "https://amzn.to/4mSNKk7",
        image: "https://m.media-amazon.com/images/I/51xnBRWFxlL._SY741_.jpg",
        title: "GRECIILOOKS Co Ord Set for Women Stylish | Linen Cord Set for Women – Oversized Top and Wide Leg Pants Set for Woman's | Casual Travel Airport Outfit for Summer Co-ord Set",
        price: "699.00 with 65 percent  M.R.P.: ₹1,999.",
        review: "Maine GRECIILOOKS Linen Co-ord Set Oversized Top & Pants ko casual wear aur travel ke liye use kiya aur honestly ₹700 ke around yeh ek “looks good, but average quality” type outfit laga. Sabse pehle iska oversized fit kaafi comfortable hai—airport look ya outing ke liye ek relaxed aur trendy vibe deta hai, aur co-ord sets waise bhi easy styling ke liye popular hote hain . Fabric linen-type feel deta hai, lekin pure linen jaisa premium touch nahi hota—zyada tar cases me rayon ya polycotton blend hota hai, jo lightweight toh hota hai par utna rich feel nahi deta...",
        category: "FASHION"
    },
    {   url: "https://amzn.to/4u3tFtr",  //mens ware
        image: "https://m.media-amazon.com/images/I/61zappWEtJL._SY741_.jpg",
        title: "LEOTUDE Men's Drop Shoulder Oversized Baggy Fit Half Sleeve Plain Solid Round Neck Multicolor T-Shirt for Men (Color Brown)",
        price: "299.00 with 73 percent M.R.P.: ₹1,099.",
        review: "Maine LEOTUDE Men's Oversized Fit T-Shirt ko casual wear ke liye use kiya aur honestly ₹300 ke price me yeh ek basic but decent option laga. Sabse pehle iska oversized fit kaafi comfortable hai—loose aur relaxed feel deta hai, jo aajkal streetwear style ke liye perfect hai. Fabric cotton blend hai, toh pehenne me soft lagta hai, lekin pure cotton jaisa premium feel nahi aata aur thoda thin side pe lagta hai . Daily use ya ghar ke liye kaafi sahi hai, lekin long-term durability average hi lagegi....",
        category: "FASHION"
    },
    {   url: "https://amzn.to/48oNjYJ",
        image: "https://m.media-amazon.com/images/I/61GLi3dzXiL._SY741_.jpg",
        title: "LEOTUDE Men's Half Sleeve Round Neck Cottonblend Graphic Print Oversized Tshirt for Man (Color Beige)",
        price: "299.00 with 73 percent  M.R.P.: ₹1,099.",
        review: "Maine LEOTUDE Men's Graphic Print Oversized T-Shirt ko casual wear ke liye use kiya aur honestly ₹300 ke price me yeh ek decent budget option laga. Sabse pehle iska oversized fit kaafi comfortable hai—drop shoulder style aur loose fitting streetwear vibe deta hai, jo aajkal trend me bhi hai. Fabric cotton blend hai, toh pehenne me soft lagta hai lekin pure cotton jaisa thick ya premium feel nahi aata, thoda lightweight side pe hai . Graphic print decent lagta hai initially, lekin long-term me thoda fade ho sakta hai agar rough wash karein....",
        category: "FASHION"
    },
    {   url: "https://amzn.to/3QHQ55a", //home & kitchen
        image: "https://m.media-amazon.com/images/I/61m1q6L+4dL._SL1200_.jpg",
        title: "Basil Bento Box – 900 ml 3-Compartment Stainless Steel Lunch Box for Kids | Leak-Proof Tiffin Box for School - Green Dino | Hocus - Docus",
        price: "1,698.99 with 43 percent savings-43% M.R.P.: ₹3,000.",
        review: "Maine Basil Bento Box 900 ml 3-Compartment Lunch Box ko daily use (office + school type packing) ke liye try kiya aur honestly yeh ek premium feel wala tiffin box hai, lekin sabke liye perfect nahi hai. Sabse pehle build quality strong lagi—stainless steel body solid feel deti hai aur plastic ke comparison me zyada durable aur safe lagta hai. 3 compartments kaafi practical hain, alag-alag food items easily separate ho jate hain aur mix nahi hote, jo daily use me kaafi convenient hai ....",
        category: "HOME & KITCHEN"
    },
    {   url: "https://amzn.to/4e9Ca1v",
        image: "https://m.media-amazon.com/images/I/71LXAkX+26L._SL1500_.jpg",
        title: "Nestasia Groovo Glass Containers for Fridge Storage Set of 6 (S-310ml x 2, M-520ml x 2, L-750ml, XL-1200ml) Transparent Stackable Glass Container with Lid, Microwave & Dishwasher Safe (Purple)",
        price: "1,499.00 with 40 percent savings-40% M.R.P.: ₹2,495",
        review: "Maine Nestasia Groovo Glass Containers Set of 6 ko fridge storage aur meal prep ke liye use kiya aur honestly ₹1500 ke around yeh ek kaafi practical aur premium-feel wala set laga. Sabse pehle iska borosilicate glass quality noticeable hai—containers sturdy feel hote hain aur plastic ki tarah smell ya stain absorb nahi karte, jo long-term use me kaafi important hota hai. Different sizes (310ml se 1200ml tak) ka combo daily kitchen use ke liye perfect hai—leftovers, sabzi, fruits sab easily organise ho jata hai...",
        category: "HOME & KITCHEN"
    },
    {   url: "https://amzn.to/4vQSmeu",
        image: "https://m.media-amazon.com/images/I/61xAsJuaCWL._SL1500_.jpg",
        title: "Butterfly Smart 3 Burner Glass Top Gas Stove | Manual Ignition | Scratch Resistant Toughened Glass | Brass Burners | Skid-proof Legs | 1 Year Manufacturer's Warranty | Black",
        price: "₹3,499.00 with 46 percent M.R.P.: ₹6,495",
        review: "Maine Butterfly Smart 3 Burner Glass Top Gas Stove ko daily kitchen use me try kiya aur honestly ₹3,500 ke budget me yeh ek practical aur decent performer laga. Sabse pehle iska glass top design kaafi premium look deta hai—kitchen me achha aesthetic feel aata hai aur clean karna bhi easy hota hai, bas ek wipe me saaf ho jata hai. Brass burners kaafi efficiently kaam karte hain, flame steady rehti hai aur cooking fast ho jati hai—especially jab ek saath 2–3 cheezein banani ho toh kaafi helpful lagta hai . Manual ignition simple hai—lighter use karna padta hai, lekin isme koi complication nahi hai. Burner spacing theek-thaak hai, medium size utensils easily fit ho jate hain, lekin bahut bade bartan use karoge toh thoda adjust karna pad sakta hai. Skid-proof legs aur sturdy build ki wajah se stability bhi achhi mili mujhe, cooking ke time hilta nahi hai...",
        category: "HOME & KITCHEN"
    },
    {   url: "https://amzn.to/48UXg05",
        image: "https://m.media-amazon.com/images/I/71Z3WWxEeqL._SL1500_.jpg",
        title: "Pigeon Aster Gas Stove 2 Burner with High Powered Brass Burner, Gas Cooktop with Glass Top and Powder Coated Body, black, standard (14266)",
        price: "₹1,699.00 with 43 percent  M.R.P.: ₹2,999.00",
        review: "Maine Pigeon Aster 2 Burner Gas Stove ko daily cooking ke liye use kiya aur honestly ₹1700 ke budget me yeh ek kaafi value-for-money option laga. Sabse pehle iska glass top design achha lagta hai—kitchen me thoda premium look deta hai aur cleaning bhi easy ho jati hai. Brass burners kaafi powerful hain, flame achhi milti hai aur normal ghar ka cooking kaam fast ho jata hai, chahe chai banani ho ya sabzi. Size compact hai, toh chhoti kitchen ke liye perfect hai aur 2 logon ya small family ke liye enough lagta hai. Lekin honestly build quality average hai—glass top ko thoda sambhal ke use karna padta hai aur knobs bhi utne premium feel nahi dete. Long-term use me kuch logon ko ignition ya burner issues bhi aaye hain, toh durability top-level nahi hai. Overall ₹1699 me yeh ek basic, budget-friendly aur kaam-chalau gas stove hai—daily simple use ke liye sahi hai, bas heavy-duty ya long-term rough use ke liye expectations thodi kam rakhni chahiye....",
        category: "HOME & KITCHEN"
    },
    {   url: "https://amzn.to/4cxxXDK",
        image: "https://m.media-amazon.com/images/I/51bMcjdgQeL._SL1000_.jpg",
        title: "Men Graphic Print Oversized T-Shirt | T Shirt for Men | Premium Cotton Half Sleeve Casual Streetwear Tee",
        price: "299.00 with 70 percent  M.R.P.: ₹999",
        review: "Maine Lifelong LLGS18 3 Burner Gas Stove ko daily kitchen use me try kiya aur honestly ₹2,300 ke around yeh ek solid budget-friendly option laga. Sabse pehle iska glass top design kaafi stylish lagta hai aur cleaning bhi easy ho jati hai—ek wipe me saaf ho jata hai. 3 brass burners kaafi efficient hain, flame steady milti hai aur ek saath multiple dishes banana easy ho jata hai, jo family cooking ke liye helpful hai . ISI certification hone ki wajah se safety ka bhi thoda trust milta hai aur anti-skid legs ki wajah se stove stable rehta hai cooking ke time . Lekin honestly kuch drawbacks bhi feel hue—build quality average side pe hai, especially knobs aur finishing utni premium nahi lagti. Glass top hone ki wajah se thoda careful use karna padta hai, warna damage ka risk rehta hai. Long-term durability bhi top-level nahi hai, heavy use me thoda wear and tear expected hai. Overall ₹2,299 me yeh ek “value-for-money, daily use” gas stove hai—agar aapko budget me 3 burner chahiye basic family cooking ke liye, toh yeh sahi choice hai, bas premium quality expect mat karna....",
        category: "HOME & KITCHEN"
    },
    {   url: "https://amzn.to/3OPadBI",
        image: "https://m.media-amazon.com/images/I/614J6c4ldEL._SL1500_.jpg",
        title: "Beyond Appliances Dorado 4 Burner Smart Glass Hobtop Gas Stove | Auto Ignition | Digital Timer | Flame Failure Device | Toughened Glass | LPG & PNG Compatible",
        price: "18,499.00 with 34 percent M.R.P.: ₹27,990",
        review: "Maine Beyond Appliances Dorado 4 Burner Smart Hobtop ko use kiya aur honestly yeh ek proper premium kitchen appliance feel deta hai, lekin thoda “luxury + risk” type product hai. Sabse pehle iska design aur build next level hai—toughened glass top, cast iron pan support aur metallic knobs kaafi premium lagte hain, aur modular kitchen me bilkul high-end look deta hai. Auto ignition aur digital timer jaise smart features daily use me genuinely useful lage—especially timer se cooking control easy ho jata hai, jo normal stoves me nahi milta . Flame Failure Device (FFD) ek strong safety feature hai—agar flame band ho jaye toh gas automatically cut ho jata hai, jo safety ke liye bada plus hai. Performance wise burners kaafi powerful hain (around 8kW total output), flame steady milti hai aur fast cooking hoti hai, especially jab 3–4 cheezein ek saath bana rahe ho . LPG aur PNG dono support karta hai, toh flexibility bhi mil jati hai...",
        category: "HOME & KITCHEN"
    },
    {   url: "https://amzn.to/4e4Q7hj", //new
        image: "https://m.media-amazon.com/images/I/71wKWiNyNFL._SL1500_.jpg",
        title: "GREENCHEF Marco Aluminium Pressure Cooker Outer Lid 3 Litre capacity, ISI Certified, Silver Colour",
        price: "749.00 with 25 percent M.R.P.: ₹999",
        review: "Maine Greenchef Marco Aluminium Pressure Cooker 3L ko daily cooking (dal, chawal, sabzi) ke liye use kiya aur honestly ₹700–₹800 ke budget me yeh ek simple aur kaam-chalau cooker laga. Sabse pehle iska aluminium body lightweight hai, isliye handle karna easy rehta hai aur heat conduction bhi fast hoti hai, toh cooking jaldi ho jati hai . Outer lid design beginners ke liye thoda easy hota hai use karna, aur ISI certification hone ki wajah se basic safety ka trust milta hai. 3 litre capacity small family (2–3 log) ke liye perfect size lagta hai—daily meals easily ban jate hain. Lekin honestly kuch compromises hain—build quality average hai, aluminium body time ke saath thodi dull ho jati hai aur heavy use me durability utni strong nahi lagti. Lid fitting aur whistle quality bhi basic level ki hai, premium brands jaisa smooth experience nahi milta. Overall ₹749 me yeh ek budget-friendly aur practical cooker hai jo daily normal use ke liye sahi hai, bas agar aapko long-term strong build ya premium finish chahiye toh thoda upar ka option lena better rahega....",
        category: "HOME & KITCHEN"
    },
    {   url: "https://amzn.to/4e9fIpo",
        image: "https://m.media-amazon.com/images/I/51qxl7UZFhL._SL1472_.jpg",
        title: "Pigeon by Stovekraft Favourite Non-induction bas Aluminium Pressure Cooker, 5 Litres, Silver",
        price: "₹999.00 with 35 percent M.R.P.: ₹1,545",
        review: "Maine Pigeon Favourite 5L Aluminium Pressure Cooker ko daily ghar ke cooking ke liye use kiya aur honestly ₹1000 ke budget me yeh ek typical “budget cooker” feel deta hai—na bahut badhiya, na bilkul bekaar. Sabse pehle iska 5 litre capacity kaafi useful hai, especially family cooking (4–5 log) ke liye dal, chawal, sabzi sab easily ban jata hai. Aluminium body ki wajah se heat jaldi milti hai aur cooking fast hoti hai, jo daily use me kaafi convenient hai . Use karne me simple hai aur outer lid design beginners ke liye easy lagta hai, handles bhi comfortable hain. Lekin honestly quality consistency thodi issue hai—kuch time baad lid fitting loose feel ho sakti hai ya steam leakage ka issue aa sakta hai (users ne bhi mixed feedback diya hai) . Aluminium hone ki wajah se body thodi jaldi dull ho jati hai aur heavy use me durability average hi lagti hai....",
        category: "HOME & KITCHEN"
    },
    {   url: "https://amzn.to/4u2lE8a",
        image: "https://m.media-amazon.com/images/I/61zmWrag1ZL._SL1500_.jpg",
        title: "Butterfly Cordial 2, 3 & 5 Litres Pressure Cookers | Outer Lid | Food Grade Virgin Aluminium | Gas Stove Compatible | ISI Certified | 3 Years Manufacturer's Warranty | Silver",
        price: "1,827.00 with 40 percent ₹609",
        review: "Maine Butterfly Cordial 2, 3 & 5 Litres Pressure Cooker Set ko regular ghar ke use me try kiya aur honestly yeh ek “complete family combo” type product laga. Sabse badi advantage yeh hai ki aapko ek hi baar me 3 different sizes mil jate hain—2L quick cooking ke liye, 3L daily use ke liye aur 5L family meals ke liye, jo kaafi practical hai daily Indian cooking ke liye . Aluminium body ki wajah se heat jaldi milti hai aur cooking fast hoti hai, aur outer lid design simple aur easy to use lagta hai, especially beginners ke liye . Use me comfortable hai aur basic safety features bhi milte hain jaise pressure control weight aur ISI certification, jo trust deta hai . Lekin honestly quality “mid-range” hai—aluminium hone ki wajah se time ke saath shine dull ho jati hai aur heavy use me durability average lagti hai. Lid fitting aur rubber gasket bhi normal level ke hain, premium brands jaisa smooth ya long-lasting feel nahi milta....",
        category: "HOME & KITCHEN"
    },
    {   url: "https://amzn.to/3Qumz2Q", //fashion t'shirt
        image: "https://m.media-amazon.com/images/I/61D2GVIp-RL._SY741_.jpg",
        title: "BULLMER Trendy Printed Cotton Blend Crew Neck/Round Neck Half Sleeve Tshirt for Men - Pack of 3",
        price: "1,827.00 with 40 percent ₹609",
        review: "Maine BULLMER Pack of 3 Printed T-Shirts ko daily casual wear me use kiya aur honestly ₹550–₹600 ke range me yeh ek “budget king” type deal lagti hai. Sabse bada plus point hai ki 3 t-shirts ek saath mil jati hain, matlab per piece cost around ₹180–₹200 padti hai, jo kaafi affordable hai. Fabric cotton blend hai, toh pehenne me comfortable lagta hai aur daily use, college ya ghar ke liye kaafi practical hai, lekin pure cotton jaisa premium ya thick feel nahi aata . Fit regular hai—na zyada tight na loose—aur prints bhi decent lagte hain starting me, jo outfit ko thoda stylish bana dete hain. Lekin honestly quality mixed hai—kuch pieces achhe milte hain, kuch thode average lagte hain, aur 2–3 washes ke baad print fade ya fabric halka feel hone lagta hai, jo is price range me expected hai ....",
        category: "FASHION"
    },
    {   url: "https://amzn.to/41UbOte",
        image: "https://m.media-amazon.com/images/I/51kJ2ga3xUL._SX569_.jpg",
        title: "AUSK Baggy Hip-Hop T-Shirt for Men - Graphic Printed T Shirts || Oversized Men Tshirt || T-Shirts",
        price: "279.00 with 81 percent  M.R.P.: ₹1,499.",
        review: "Maine AUSK Baggy Hip-Hop Oversized T-Shirt ko casual outings aur daily wear me use kiya aur honestly ₹250–₹300 ke budget me yeh ek “stylish but basic quality” type product laga. Sabse pehle iska oversized fit kaafi trendy hai—proper streetwear vibe deta hai aur loose fitting ki wajah se pehenne me kaafi comfortable lagta hai, especially garmi me airy feel deta hai. Graphic print bhi first look me kaafi cool lagta hai aur outfit ko thoda standout bana deta hai. Fabric generally cotton ya cotton-blend hota hai, toh soft feel milta hai lekin thickness aur premium quality utni strong nahi hoti . Lekin honestly downside yeh hai ki quality consistency thodi hit-or-miss hai—kabhi print thoda fade hone lagta hai 2–3 wash ke baad, aur fabric bhi thoda patla feel hota hai. Fit oversized hai toh size select karte time dhyan dena padta hai, warna zyada loose lag sakta hai. Overall ₹279 me yeh ek “value-for-money, trendy streetwear” t-shirt hai—agar aapko cheap me stylish look chahiye toh sahi hai, bas long-lasting ya premium quality expect mat karna.....",
        category: "FASHION"
    },
    {   url: "https://amzn.to/3QJxqWC",
        image: "https://m.media-amazon.com/images/I/51Az-9OF6kL._SY741_.jpg",
        title: "London Hills Printed Cotton Blend Half Sleeve Oversized Men Round Neck Tshirts | T Shirt for Man | Tshirt | Shirts Men | Tshirt for Man | T-Shirt | Mult-Colored",
        price: "399.00 with 69 percent M.R.P.: ₹1,299",
        review: "Maine London Hills Printed Oversized T-Shirt ko casual wear aur outings ke liye use kiya aur honestly ₹350–₹400 ke budget me yeh ek “stylish aur decent quality” option laga. Sabse pehle iska oversized fit kaafi trendy hai—proper streetwear vibe deta hai aur loose fitting ki wajah se kaafi comfortable lagta hai, especially garmi me airy feel deta hai. Fabric cotton ya cotton-blend hota hai, toh pehenne me soft lagta hai aur daily use ke liye theek hai, lekin thick ya premium feel utna strong nahi hota . Graphic prints bhi kaafi attractive lagte hain starting me aur outfit ko standout bana dete hain. Lekin honestly quality mid-range hi hai—2–3 washes ke baad print thoda fade ho sakta hai aur fabric bhi normal feel hone lagta hai, jo is price range me common hai. Fit oversized hai toh size select karte time thoda dhyan dena padta hai warna zyada loose lag sakta hai. Overall ₹399 me yeh ek “value-for-money, stylish daily wear” t-shirt hai—agar aapko budget me trendy look chahiye toh sahi hai, bas long-lasting ya premium quality expect mat karna.....",
        category: "FASHION"
    },
    {   url: "https://amzn.to/4sXLgSR",
        image: "https://m.media-amazon.com/images/I/41T31Sc9ECL._SX569_.jpg",
        title: "AUSK Men's Half Sleeve Drop Shoulder Loose T-Shirt || Drop Shoulder Printed Oversized Tshirt for Mens",
        price: "279.00 with 81 percent M.R.P.: ₹1,499",
        review: "₹250–₹300 ke budget me yeh ek “trendy but basic quality” type product laga. Sabse pehle iska drop shoulder aur oversized fit kaafi stylish hai—proper streetwear vibe deta hai aur loose fitting ki wajah se kaafi comfortable lagta hai, especially garmi me airy feel deta hai. Fabric cotton ya cotton-blend hota hai, jo pehenne me soft aur breathable feel deta hai, daily use ke liye sahi hai . Look-wise t-shirt kaafi achha lagta hai—graphic print ya plain design dono hi modern feel dete hain, aur jeans/cargos ke saath easily match ho jata hai. Lekin honestly quality thodi average side pe hai—fabric thoda thin lag sakta hai aur 2–3 washes ke baad print ya finishing me halka change aa jata hai, jo is price range me common hai. Fit oversized hai, toh size select karte time thoda dhyan dena padta hai warna extra loose lag sakta hai ......",
        category: "FASHION"
    },
    {   url: "https://amzn.to/4vPfNor", //new ------
        image: "https://m.media-amazon.com/images/I/71aodJE5MfL._SL1500_.jpg",
        title: "Samsung Galaxy S26 Ultra 5G (Black, 12GB RAM, 256GB Storage) with Built-in Privacy Display, AI Phone, Photo Assist, Creative Studio, 200MP Camera, 5000mAh Battery and Snapdragon 8 Elite Gen 5",
        price: "1,30,999.00 with 6 percent M.R.P.: ₹1,39,999",
        review: "Maine Samsung Galaxy S26 Ultra 5G ko use kiya aur honestly yeh ek proper “ultra flagship” experience deta hai, lekin ₹1.3 lakh price pe expectations naturally high ho jati hain. Sabse pehle iska 6.9-inch QHD+ display kaafi sharp aur smooth hai—scrolling, gaming aur OTT sab kuch premium feel deta hai, aur new Privacy Display feature public places me kaafi useful lagta hai kyunki side se screen easily visible nahi hoti . Performance bhi next level hai—Snapdragon 8 Elite Gen 5 ki wajah se phone super fast hai, heavy gaming aur multitasking me bhi koi lag feel nahi hota . Camera iska biggest highlight hai—200MP main sensor ke saath photos kaafi detailed aur sharp aati hain, especially low-light me bhi output strong milta hai . Battery 5000mAh hai jo easily full day chal jati hai, but honestly is price range me koi dramatic upgrade nahi laga. Design premium hai, S-Pen productivity ke liye useful hai, aur AI features (Photo Assist, Creative Studio) bhi daily use me thode helpful lagte hain. Lekin real talk yeh hai ki yeh phone “incremental upgrade” feel deta hai—S25 Ultra ya S24 Ultra se aaye ho toh difference itna huge nahi lagega. Price bhi kaafi premium hai, toh value proposition depend karta hai ki aapko AI features, camera aur ultra performance kitni importance dete ho. Overall yeh ek top-tier Android phone hai, but “must buy” tabhi hai jab aap truly flagship + camera + productivity power user ho.....",
        category: "ELECTRONICS"
    },
    {   url: "https://amzn.to/4sRckTB",
        image: "https://m.media-amazon.com/images/I/71uAly+24OL._SL1500_.jpg",
        title: "vivo V70 5G (Passion Red, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers",
        price: "49,999.00 with 2 percent  M.R.P.: ₹50,999",
        review: "Maine vivo V70 5G (8GB/256GB) ko use kiya aur honestly yeh ek “balanced mid-premium phone” feel deta hai—na fully flagship, na basic mid-range, but overall kaafi solid daily driver hai ₹50K ke around. Sabse pehle iska design aur in-hand feel kaafi premium lagta hai—slim body, Passion Red color aur glass finish isko classy look dete hain. Display bhi kaafi achha hai—6.59-inch AMOLED, 120Hz refresh rate ke saath scrolling smooth lagti hai aur videos dekhne me kaafi vibrant experience milta hai . Battery iska strong point hai—6500mAh ki wajah se easily 1.5 din tak chal jata hai normal use me, aur fast charging bhi kaafi quick hai .  Performance side pe Snapdragon 7 Gen 4 daily use, multitasking aur moderate gaming ke liye smooth hai, lekin ye ultra-heavy gaming ya extreme performance flagship level nahi hai . Camera ka experience surprisingly good hai—50MP main sensor aur telephoto shots kaafi detailed aate hain, especially portraits me vivo ka processing kaafi natural feel deta hai . Lekin honestly kuch compromises bhi hain—price thoda aggressive lagta hai (around ₹45–50K range me similar spec phones mil jate hain), aur heavy users ko kabhi-kabhi chipset “flagship killer” jaisa feel nahi deta. Speakers aur haptics bhi average side pe hain. Overall, agar aapko camera, battery aur premium design priority hai toh vivo V70 5G ek strong option hai, lekin agar aap pure performance/value-for-money dhund rahe ho toh thoda aur compare karna better rahega.....",
        category: "ELECTRONICS"
    },
    {   url: "https://amzn.to/3QJzGNA",
        image: "https://m.media-amazon.com/images/I/61ibrTrkjqL._SL1500_.jpg",
        title: "Oppo F33 Pro 5G Smartphone (8GB RAM, 256GB Storage, Passion Red) |50MP Ultrawide Selfie Camera|7000 mAh Long Battery Life | 80W Fast Charging-with No Cost EMI/Bank Offers",
        price: "40,490.00 with 8 percent  M.R.P.: ₹43,999",
        review: "Maine OPPO F33 Pro 5G ko use kiya aur honestly yeh ek “feature-heavy mid-range phone” feel deta hai, lekin ₹40K+ price ke hisaab se mixed experience milta hai. Sabse pehle iska design aur in-hand feel kaafi premium hai—Passion Red variant ka finish kaafi attractive lagta hai aur phone light bhi hai, isliye daily use me comfortable rehta hai. Sabse strong point iska 7000mAh battery hai—real use me easily 1.5–2 din chal jata hai heavy usage ke saath, aur 80W fast charging bhi kaafi fast refill kar deti hai, jo daily life me genuinely useful hai . Display bhi decent hai—AMOLED panel, 120Hz refresh rate ke saath smooth scrolling aur good brightness milti hai, toh OTT aur social media experience achha lagta hai . Camera ka main highlight 50MP selfie system hai jo ultra-wide angle ke saath group selfies me kaafi useful hai, aur normal lighting me photos kaafi sharp aati hain . Lekin honestly kuch compromises bhi hain—performance side pe yeh phone mid-range chipset pe based hai, toh heavy gaming ya long-term high performance me flagship jaisa feel nahi aata. Kuch reviews me bhi bola gaya hai ki price ke hisaab se performance expectations thodi mismatch ho sakti hain aur software experience fully polished nahi lagta har situation me.....",
        category: "ELECTRONICS"
    },
    {   url: "https://amzn.to/48oIhLM",
        image: "https://m.media-amazon.com/images/I/616kkUbRg4L._SL1500_.jpg",
        title: "OnePlus 15 | 16GB+512GB | Sand Storm | India's First Snapdragon® 8 Elite Gen 5 | 7300mAh Battery | Personalised AI | Game-Changing 165Hz Display | Triple 50MP Camera with 4K 120fps Dolby Vision",
        price: "79,999.00 with 18 percent  M.R.P.: ₹96,999",
        review: "Agar aapko top-tier performance, insane battery life, high refresh display aur gaming focus chahiye, toh OnePlus 15 ek beast phone hai. Lekin agar aap “balanced camera + light weight + all-round polish” chahte ho, toh yeh thoda performance-heavy direction me jhukta hua flagship hai.....",
        category: "ELECTRONICS"
    },
    {   url: "https://amzn.to/3QLW3lz",
        image: "https://m.media-amazon.com/images/I/51TvUow3bKL._SL1024_.jpg",
        title: "Google Pixel 10 Pro XL (Obsidian, 256 GB) (16 GB RAM)",
        price: "1,19,900.00 with 4 percent savings-4% ₹1,19,900 M.R.P.: ₹1,24,999",
        review: "Agar aapko best camera, clean Android experience aur AI features chahiye, toh Pixel 10 Pro XL ek top-tier choice hai. Lekin agar aap gaming, raw performance aur fast charging chahte ho, toh is price me OnePlus ya Samsung better value de sakte hain.....",
        category: "ELECTRONICS"
    },

    // ... baaki products yahan {url, image, title, price, review, category} format mein add karo
];

let currentUser = JSON.parse(localStorage.getItem('userSession')) || null;
let userDatabase = JSON.parse(localStorage.getItem('userDatabase')) || []; 

document.addEventListener('DOMContentLoaded', () => {
    filterProducts('ALL PRODUCTS');
    updateUIForLogin();
});

// ==========================================
// 2. LOGIN & PROFILE LOGIC
// ==========================================
function handleLogin(name, email, password) {
    if(!name || !email || !password) return alert("Bhai saari details bharo!");

    let user = userDatabase.find(u => u.email === email && u.password === password);
    
    if (!user) {
        user = { name, email, password, buyCount: 0 };
        userDatabase.push(user);
        localStorage.setItem('userDatabase', JSON.stringify(userDatabase));
    }

    currentUser = user;
    localStorage.setItem('userSession', JSON.stringify(currentUser));
    
    alert(`Swagat hai ${user.name}! Ab aap Buy kar sakte hain.`);
    updateUIForLogin();
    closeLoginModal();
}

function updateUIForLogin() {
    const loginBtn = document.getElementById('mainLoginBtn'); 
    const pName = document.getElementById('profileName');
    const bCount = document.getElementById('buyCount');

    if (currentUser) {
        if(loginBtn) loginBtn.innerText = "My Profile";
        if(pName) pName.innerText = currentUser.name;
        if(bCount) bCount.innerText = currentUser.buyCount;
    }
}

function logout() {
    localStorage.removeItem('userSession');
    location.reload();
}

// ==========================================
// 3. THE "STRICT" BUY LOGIC (Ispe dhyan de)
// ==========================================
function handleBuyClick(prodUrl) {
    if (!currentUser) {
        alert("🚨 Bhai ruko! Pehle Login karo, uske baad hi link khulega.");
        openLoginModal(); 
        return; // Yahan se code ruk jayega, link nahi khulega
    }

    // Agar login hai toh count badhao
    currentUser.buyCount += 1;
    let userIndex = userDatabase.findIndex(u => u.email === currentUser.email);
    if(userIndex !== -1) {
        userDatabase[userIndex].buyCount = currentUser.buyCount;
        localStorage.setItem('userDatabase', JSON.stringify(userDatabase));
    }
    localStorage.setItem('userSession', JSON.stringify(currentUser));
    
    // Counter update
    if(document.getElementById('buyCount')) {
        document.getElementById('buyCount').innerText = currentUser.buyCount;
    }

    // Link kholo
    window.open(prodUrl, '_blank');
}

// ==========================================
// 4. RENDERING & FILTERING
// ==========================================
function filterProducts(categoryName) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    grid.innerHTML = ''; 

    const filtered = (categoryName === 'ALL PRODUCTS') 
        ? PRODUCT_LINKS 
        : PRODUCT_LINKS.filter(p => p.category === categoryName);

    filtered.forEach((prod) => {
        const cardHTML = `
            <div class="product-card bg-white p-4 border border-gray-100 flex flex-col justify-between shadow-sm rounded-sm h-full group">
                <div>
                    <div class="w-full aspect-square mb-4 flex items-center justify-center overflow-hidden">
                        <img src="${prod.image}" class="object-contain max-h-full transition duration-500 group-hover:scale-105">
                    </div>
                    <h4 class="text-sm font-semibold text-gray-800 line-clamp-2 h-10 mb-2">${prod.title}</h4>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-xl font-black text-black">₹${prod.price}</span>
                    </div>
                    <div class="border-t border-dashed border-gray-100 pt-3 mb-4 text-left text-[11px] text-gray-600">
                        <strong class="text-[#2874f0] uppercase italic">Real Review:</strong><br>
                        ${prod.review}
                    </div>
                </div>
                <button onclick="handleBuyClick('${prod.url}')" class="w-full bg-[#fb641b] text-white py-2.5 font-bold uppercase text-[10px] rounded-sm transition hover:bg-[#f4511e]">
                    Buy Now
                </button>
            </div>`;

        const wrapper = document.createElement('div');
        wrapper.className = "p-2"; 
        wrapper.innerHTML = cardHTML;
        grid.appendChild(wrapper);
    });
}

// Search Logic
function searchProducts(val) {
    const searchTerm = val.toLowerCase().trim();
    const grid = document.getElementById('productGrid');
    const allWrappers = grid.children;
    for (let wrapper of allWrappers) {
        const titleElement = wrapper.querySelector('h4');
        if (titleElement) {
            wrapper.style.display = titleElement.innerText.toLowerCase().includes(searchTerm) ? "block" : "none";
        }
    }
}

// Modal Helpers
function openLoginModal() { document.getElementById('loginModal')?.classList.remove('hidden'); }
function closeLoginModal() { document.getElementById('loginModal')?.classList.add('hidden'); }
function openProfile() { document.getElementById('profileModal')?.classList.remove('hidden'); }
function closeProfile() { document.getElementById('profileModal')?.classList.add('hidden'); }