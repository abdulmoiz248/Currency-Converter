const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };

  const url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";
 let dropdown=document.querySelectorAll("select");
 for (let select of dropdown){
    for(let currCode in countryList){
        let opt = document.createElement("option");
        opt.innerText = currCode;
        opt.value = currCode;
        select.append(opt);
      
    }
    
 }

 dropdown[0].addEventListener("change",(ev)=>{
  updateFlag(ev.target,0);
});

dropdown[1].addEventListener("change",(ev)=>{
  updateFlag(ev.target,1);
});


 function updateFlag(ev,n){
     if(n==0){
       let img=document.querySelector("#from-img");
       let code=ev.value;
       img.src=`https://flagsapi.com/${countryList[code]}/flat/64.png`;

     }else{
       let img=document.querySelector("#to-img");
       let code=ev.value;
       img.src=`https://flagsapi.com/${countryList[code]}/flat/64.png`;
     }
 }
 const apiKey = 'cur_live_brlmTraafPs5WoTyKzSZmVrT15p1nNFrBjsM9vcV'; 
 let button=document.querySelector("button");
 button.addEventListener("click", async ()=>{
    let data=document.querySelector("#input1").value;
    if(data<1){
      document.querySelector("#input1").value=1;
    }
    
      fill_rates();
         
 });
 

 const fill_rates= async ()=>{
  let from = document.querySelector("#select1").value;
    let curr=findCurrencyByCountryCode(from);
     let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${getFormattedDate()}/v1/currencies/${curr}.json`;
    
         let response = await fetch(url);
         let data1 = await response.json();
         let input1=document.querySelector('#input1').value;
         document.querySelector('#input2').value=find_rate(curr,data1)*input1;
 }

 fill_rates();

 function find_rate(curr,data){
  let to = document.querySelector("#select2").value.toLowerCase();
  let country=data[curr];
  return country[to];        
 }

 function findCurrencyByCountryCode(countryCode) {
  for (const [currency, code] of Object.entries(countryList)) {
      if (currency== countryCode) {
          return currency.toLowerCase();
      }
  }
  // Return null if the country code is not found
}

 function getFormattedDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  
  return `${year}-${month}-${day}`;
}