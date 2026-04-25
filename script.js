// ==========================================
// 1. DATA & CONFIG
// ==========================================
const PRODUCT_LINKS = [
    { 
        url: "https://amzn.to/48dXsYe", 
        image: "https://m.media-amazon.com/images/I/81YXtph65uL._SL1500_.jpg",
        title: "LG 139 cm (55 inches) OLED B2 AI Series 4K Ultra HD (3840 x 2160) Smart webOS OLED TV 55B2PSA (Black)",
        price: "₹1,16,490.00 with 21 percent savings-21% M.R.P.: ₹1,47,490.00",
        review: "Maine LG OLED B2 55-inch 4K Smart TV ko home setup me use kiya aur honestly yeh ek proper premium viewing experience deta hai, lekin kuch trade-offs ke saath. Sabse pehle picture quality next level hai—OLED panel ki wajah se blacks bilkul deep aur colors kaafi vibrant lagte hain, especially movies aur OTT content dekhte waqt cinematic feel aata hai. 120Hz refresh rate hone ki wajah se sports aur gaming me motion smooth rehta hai, aur PS5/Xbox pe gaming kaafi solid experience deta hai . Smart features bhi kaafi smooth lage—webOS fast hai, apps easily access ho jati hain aur overall UI clean feel deta hai. Design bhi slim aur premium hai, wall mount pe kaafi classy lagta hai. Lekin honestly brightness thodi limitation hai—bahut bright room me kabhi-kabhi screen utni punchy nahi lagti jitni QLED TVs me hoti hai . Sound output bhi average hai, matlab is price pe ek soundbar lena better rahega. Overall ₹1.1–1.2 lakh ke range me yeh TV un logon ke liye best hai jo movies, OTT aur dark-room viewing enjoy karte hain. Agar aapko best picture quality chahiye toh yeh solid choice hai, lekin agar aap bright room me use karte ho ya loud audio chahiye toh thoda compromise feel ho sakta hai.",
        category: "ELECTRONICS" // Screenshot ke hisab se
    },
    { 
        url: "https://amzn.to/3Qp9B6s", 
        image: "https://m.media-amazon.com/images/I/818vnFP09yL._SL1500_.jpg",
        title: "STCL 164 cm (65 inches) 4K UHD Smart QD-Mini LED Google TV 65Q6C",
        price: "₹67,990.00 with 60 percent savings-60%  M.R.P.: ₹1,69,990.",
        review: "4.8TCL 65Q6CS Mini LED Google TV₹61,990•Mini LED technology enhances contrast and color accuracy.TCL C6K QD-Mini LED 4K TV₹72,990•High-quality 4K resolution with QD-Mini LED for sharp images.4.8TCL 65-inch 4K UHD Smart Google TV₹66,350•Large 65-inch 4K UHD screen with smart Google TV features.4.8 Maine TCL 65Q6C QD-Mini LED 4K Google TV ko kuch time use kiya aur honestly ₹65–70K ke budget me yeh ek powerful value-for-money TV laga. Sabse pehle picture quality ne impress kiya—QD Mini LED panel ki wajah se brightness kaafi high hai aur colors bhi kaafi vibrant dikhte hain, especially HDR content me details clear aati hain. Dark scenes me bhi blacks kaafi achhe handle karta hai (OLED jaisa perfect nahi, but kaafi close feel deta hai) . 144Hz refresh rate hone ki wajah se sports aur gaming me smoothness noticeable hai, aur console gaming ke liye bhi kaafi solid experience milta hai. Google TV interface smooth hai, apps easily chalti hain aur voice control bhi kaam ka hai. Sound bhi average se better laga—Onkyo speakers hone ki wajah se normal TV se thoda powerful feel aata hai, lekin full cinematic experience ke liye soundbar better rahega. Bright rooms me iska performance strong hai, jo is price range me ek bada plus point hai. Lekin honestly kuch downsides bhi mile—UI kabhi-kabhi halka sa lag feel karta hai aur long-term reliability pe mixed feedback milta hai users se (kuch logon ne panel issues bhi mention kiye hain online). Overall ₹67,990 me yeh TV un logon ke liye best hai jo bada screen, high brightness aur gaming-friendly features chahte hain—agar aapko OLED level perfection nahi chahiye but “almost premium” experience budget me chahiye, toh yeh solid choice hai.",
        category: "ELECTRONICS"
    },
    { 
        url: "https://amzn.to/4mIrlpo", 
        image: "https://m.media-amazon.com/images/I/61kqDPQbHnL._SY741_.jpg",
        title: "Tshirt for Men | Men Polo t-Shirt Shirt | Solid Cotton Rich Polo T Shirt | Collar Tshirts | Half Sleeves | Plain-Regular Fit",
        price: "499",
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
    {   url: "https://amzn.to/4cyxfpS",
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
    {   url: "https://amzn.to/4u3tFtr",
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
    {   url: "https://amzn.to/41Rcbon",
        image: "https://m.media-amazon.com/images/I/510VY-92YfL._SY741_.jpg",
        title: "Men Graphic Print Oversized T-Shirt | T Shirt for Men | Premium Cotton Half Sleeve Casual Streetwear Tee",
        price: "299.00 with 70 percent  M.R.P.: ₹999",
        review: "Maine is type ka Men Graphic Print Oversized T-Shirt (₹299 range) daily casual use me try kiya aur honestly budget ke hisaab se yeh ek sahi deal lagti hai. Sabse pehle iska oversized fit kaafi comfortable hota hai—loose aur airy feel deta hai, jo garmi me kaafi useful hai aur streetwear look bhi achha lagta hai. Graphic print starting me kaafi stylish lagta hai aur outfit ko thoda standout bana deta hai. Fabric usually cotton blend hota hai, toh soft toh lagta hai lekin thoda thin side pe hota hai—pure cotton jaisa premium feel nahi milta. Daily wear, college ya friends ke saath outing ke liye yeh perfect hai, especially jab aapko low budget me trendy look chahiye. Lekin honestly durability average hi hai—2–3 wash ke baad print thoda fade ho sakta hai aur fabric bhi normal feel hone lagta hai, jo is price range me common hai . Overall ₹299 me yeh ek “value-for-money, stylish but not long-lasting” type t-shirt hai—agar aapko cheap aur trendy option chahiye toh bilkul sahi choice hai...",
        category: "FASHION"
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
                        <strong class="text-[#2874f0] uppercase italic">Bhai Ka Review:</strong><br>
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