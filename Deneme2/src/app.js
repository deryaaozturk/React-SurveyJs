import React, { useCallback } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

// const SURVEY_ID = 1;


const jsonData = {title: "Model Assessment Center" ,  
completedHtmlOnCondition: [
  {
    expression: "500 < {totalScore} && {totalScore}< 800",
    html: "Maaşınız 9 bin tl.Puanınız {totalScore } "
  },
  {
    expression: "800<{totalScore} && {totalScore}<1000",
    html: "Maaşınız 10 bin tl . Puanınız {totalScore} "
  }, {
    expression: "1000<{totalScore} && {totalScore}<1200",
    html: "Maaşınız 13 bin tl.Puanınız {totalScore} "
  },{
    expression: "1200<{totalScore} && {totalScore}<1400",
    html: "Maaşınız 16 bin tl.Puanınız {totalScore} "
  },{
    expression: "1400<{totalScore} && {totalScore}<1800",
    html: "Maaşınız 19 bin tl.Puanınız {totalScore} "
  },{
    expression: "1800<{totalScore}&& {totalScore}<2000",
    html: "Maaşınız 22 bin tl.Puanınız {totalScore} "
  }
 

],


"pages": [
 {
  "name": "Sayfa1",
  "elements": [
   {
    "type": "text",
    "name": "Soru1",
    "title": "FİRMA "
   },
   {
    "type": "text",
    "name": "Soru2",
    "title": "BÖLÜM "
   },
   {
    "type": "text",
    "name": "Soru3",
    "title": "GÖREV"
   },
   {
    "type": "text",
    "name": "Soru5",
    "title": "ÇALIŞABİLECEK PERSONEL SAYISI"
   }
  ]
 },
 {
  "pages": "Sayfa2",
  "elements": [
   {
    "type": "checkbox",
    "name": "Soru4",
    "title": "BEDENSEL ÇABA",
    "choices": [
     {
      "value": "11",
      "text": "El- göz koordinasyonu"
     },
     {
      "value": "20",
      "text": "El-göz-ayak koordinasyonu"
     },
     {
      "value": "12",
      "text": "Uzun süre ayakta çalışma"
     },
     {
      "value": "13",
      "text": "Uzun süre oturarak çalışma"
     },
     {
      "value": "14",
      "text": "Ağır yük kaldırma"
     },
     {
      "value": "15",
      "text": "Ağır yük taşıma"
     }
    ]
   }
  ]
 },
 {
  "name": "Sayfa3",
  "elements": [
   {
    "type": "checkbox",
    "name": "Soru6",
    "title": "Zihinsel Çaba",
    "choices": [
     {
      "value": "10",
      "text": "Dikkat gerektiren hesaplamalar yapma"
     },
     {
      "value": "20",
      "text": "Araştırdığı bilgileri analiz etme, yorumlama, sonuç alma"
     },
     {
      "value": "11",
      "text": "Kendi yaptığı iş ile ilgili yorum yapma"
     },
     {
      "value": "21",
      "text": "Takımının yaptığı iş ile ilgili strateji geliştirme"
     },
     {
      "value": "40",
      "text": "Bölümünün yaptığı iş ile ilgili strateji geliştirme"
     },
     {
      "value": "80",
      "text": "Birkaç bölümün yaptığı iş ile ilgili strateji geliştirme"
     },
     {
      "value": "100",
      "text": "Şirketin tümünü kapsayan strateji geliştirme"
     },
     {
      "value": "22",
      "text": "Kamaşık problemleri çözme "
     },
     {
      "value": "30",
      "text": "Yaratıcılığı kullanma /kreatif olma"
     },
     {
      "value": "60",
      "text": "Yaratıcılığı yönetme/ kreatifliği yönetme"
     }
    ]
   }
  ]
 },
 {
  "name": "Sayfa4",
  "elements": [
   {
    "type": "checkbox",
    "name": "Soru7",
    "title": "İŞ ÇEVRESİ VE RİSKİ",
    "choices": [
     {
      "value": "10",
      "text": "Çalışma ortamı günlük işlerin yürütülmesinde  olağan olan risk ve rahatsızlıklardan oluşur.Çalışma ortamı ısıtma, soğutma ve ışıklandırma açısından elverişlidir. Sadece ofis ekipmanlarının (bilgisayarlar, fotokopi makineleri vb.) kullanımı ile ilgili gerekli bilgilendirme yapılması ve gerekli tedbirlerin alınması( yangın alarmı vb.) yeterlidir."
     },
     {
      "value": "20",
      "text": "Çalışma ortamı orta derecede  riskli ve rahatsızlık vericidir. Çalışma ortamında hareket eden makineler/kimyasal maddeler bulunması, iş gereği bazen seyehat edilmesi gibi, çalışanların korunma tedbiri olarak özel giysiler kullanmaları (eldiven, önlük vb.), makineler ile mümkün olan minimum yakınlıkta bulunmaları gerekmektedir."
     },
     {
      "value": "50",
      "text": "Çalışma ortamı yüksek derecede riskli ve tehlikeli yada olağanüstü streslidir. Çalışanların emniyetinin sağlanması için oldukça yoğun önlemlerin alınması gereklidir. Aşırı soğuk havada çalışması, fiziksel tehdit altında bulunması, yoğun seyehat gibi."
     },
     {
      "value": "80",
      "text": "Çalışma ortamında bireyin veya diğer kişilerin yapacakları en küçük hata ölüm ile sonuçlanabilir."
     }
    ]
   }
  ]
 },
 {
  "name": "Sayfa5",
  "elements": [
   {
    "type": "checkbox",
    "name": "Soru8",
    "title": "MAKİNE VE MALZEME SORUMLULUĞU",
    "choices": [
     {
      "value": "10",
      "text": "Kendi kullandığı ofis araçlarının, ekipmanın, malzemelerin sorumluluğu"
     },
     {
      "value": "20",
      "text": "Kendi takımının kullandığı ofis araçlarının , ekipmanın,malzemelerin sorumluluğu"
     },
     {
      "value": "40",
      "text": "Kendi departmanının kullandığı ofis araçlarının, ekipmanın, malzemelerin sorumluluğu"
     },
     {
      "value": "80",
      "text": "Birkaç bölümün kullandığı ofis araçlarının, ekipmanın, malzemelerin sorumluluğu"
     },
     {
      "value": "100",
      "text": "Şirkette kullanılan tüm ofis araçlarının, ekipmanın, malzemelerin sorumluluğu"
     }
    ]
   }
  ]
 },
 {
  "name": "Sayfa6",
  "elements": [
   {
    "type": "checkbox",
    "name": "Soru9",
    "title": " İNSAN KAYNAĞI YÖNETİMİ SORUMLULUĞU",
    "choices": [
     {
      "value": "10",
      "text": "1-10 personelin yönetim sorumluluğu"
     },
     {
      "value": "20",
      "text": "11-100 personelin yönetim sorumluluğu"
     },
     {
      "value": "40",
      "text": "101-300  personelin yönetim sorumluluğu"
     },
     {
      "value": "60",
      "text": "301-500 personelin yönetim sorumluluğu"
     },
     {
      "value": "80",
      "text": "501-2000 personelin yönetim sorumluluğu",
      "visibleIf": "501-2000 personelin yönetim sorumluluğu"
     },
     {
      "value": "100",
      "text": "2001 ve üzeri personelin yönetim sorumluluğu"
     }
    ]
   }
  ]
 },
 {
  "name": "Sayfa7",
  "elements": [
   {
    "type": "checkbox",
    "name": "Soru10",
    "title": "GİZLİLİK SORUMLULUĞU",
    "choices": [
     {
      "value": "10",
      "text": "İş, kurum ile ilgili bilgilerin kurum dışında paylaşılmamasını gerektirir."
     },
     {
      "value": "20",
      "text": "İş, sahip olunan bilgilerin 3. taraf kişi ve kurumlar ile paylaşılmamasını gerektirir."
     },
     {
      "value": "40",
      "text": "İş, sahip olunan bilgilerin 3. taraf kişi ve kurumlar  ve kurum içinde de paylaşılmamasını gerektirir."
     },
     {
      "value": "80",
      "text": "İş, sahip olunan bilgileirn yöneticisi dışında, başka kişi ve kurumlar ile paylaşılmamasını gerektirir."
     }
    ]
   }
  ]
 },
 {
  "name": "Sayfa8",
  "elements": [
   {
    "type": "checkbox",
    "name": "Soru11",
    "title": "DİĞER KİŞİLERİN KORUNMASI SORUMLULUĞU",
    "choices": [
     {
      "value": "10",
      "text": "1-10 personelin yönetim sorumluluğu"
     },
     {
      "value": "20",
      "text": "11-100 personelin yönetim sorumluluğu"
     },
     {
      "value": "40",
      "text": "101-300  personelin yönetim sorumluluğu"
     },
     {
      "value": "60",
      "text": "301-500 personelin yönetim sorumluluğu"
     },
     {
      "value": "80",
      "text": "501-2000 personelin yönetim sorumluluğu"
     },
     {
      "value": "100",
      "text": "2001 ve üzeri personelin yönetim sorumluluğu"
     }
    ]
   }
  ]
 },
 {
  "name": "Sayfa9",
  "elements": [
   {
    "type": "checkbox",
    "name": "Soru12",
    "title": "MALİ SORUMLULUK",
    "choices": [
     {
      "value": "10",
      "text": "Aylık 50.000 TL' ye kadar olan bütçelerin yönetim sorumluluğuna sahiptir."
     },
     {
      "value": "20",
      "text": "Aylık 300.000 TL' ye kadar olan bütçelerin yönetim sorumluluğuna sahiptir."
     },
     {
      "value": "40",
      "text": "Aylık 1.000.000 TL' ye kadar olan bütçelerin yönetim sorumluluğuna sahiptir."
     },
     {
      "value": "60",
      "text": "Aylık 6.000.000 TL' ye kadar olan bütçelerin yönetim sorumluluğuna sahiptir."
     },
     {
      "value": "80",
      "text": "Aylık 10.000.000 TL' ye kadar olan bütçelerin yönetim sorumluluğuna sahiptir."
     },
     {
      "value": "100",
      "text": "Aylık 10.000.000 TL üzeri olan bütçelerin yönetim sorumluluğuna sahiptir."
     }
    ]
   }
  ]
 },
 {
  "name": "Sayfa10",
  "elements": [
   {
    "type": "checkbox",
    "name": "Soru13",
    "title": "KARAR ALMA",
    "choices": [
     {
      "value": "10",
      "text": "Sadece kendi yaptığı işle ilgili kararlar alabilir."
     },
     {
      "value": "20",
      "text": "Sadece kendi takımının yaptığı işle ilgili kararlar alabilir."
     },
     {
      "value": "40",
      "text": "Sadece kendi departmanının yaptığı işle ilgili kararlar alabilir."
     },
     {
      "value": "60",
      "text": "Kendisine bağlı birkaç bölümünün yaptığı işle ilgili kararlar alabilir."
     },
     {
      "value": "80",
      "text": "Tüm şirketin yaptığı işle ilgili kararlar alabilir."
     }
    ]
   }
  ]
 },
 {
  "name": "Sayfa11",
  "elements": [
   {
    "type": "checkbox",
    "name": "Soru14",
    "title": "İNSİYATİF KULLANMA",
    "choices": [
     {
      "value": "10",
      "text": "Tamamen yazılı kurallar ve prosedürlere uygun olarak hareket eder,insiyatif kullanmaz."
     },
     {
      "value": "20",
      "text": "Yazılı kurallar ve prosedürler kapsamına giren konularda insiyatif kullanır."
     },
     {
      "value": "40",
      "text": "Yazılı kurallar ve prosedürler kapsamına girmeyen konularda, yöneticisiyle birlikte karar alır."
     },
     {
      "value": "60",
      "text": "Yazılı kurallar ve prosedürler kapsamına girmeyen konularda, yöneticisine danışarak  karar alır."
     },
     {
      "value": "80",
      "text": "Yazılı kurallar ve prosedürler kapsamına girmeyen konularda karar alır, uygulamaya geçirmek için yöneticisinden onay alır."
     },
     {
      "value": "100",
      "text": "Yazılı kurallar ve prosedürler kapsamına girmeyen konularda karar alır, kararların sonuçları  konusunda yöneticisini bilgilendirir."
     }
    ]
   }
  ]
 },
 {
  "name": "Sayfa12",
  "elements": [
   {
    "type": "checkbox",
    "name": "Soru15",
    "title": "HARCAMA YAPMA YETKİSİ",
    "choices": [
     {
      "value": "20",
      "text": "Tek seferde 500 TL' ye kadar harcama yapma yetkisine sahiptir."
     },
     {
      "value": "40",
      "text": "Tek seferde 5.000 TL' ye kadar harcama yapma yetkisine sahiptir."
     },
     {
      "value": "60",
      "text": "Tek seferde 10.000 TL' ye kadar harcama yapma yetkisine sahiptir."
     },
     {
      "value": "80",
      "text": "Tek seferde 50.000 TL' ye kadar harcama yapma yetkisine sahiptir."
     },
     {
      "value": "100",
      "text": "Tek seferde 100.000 TL' ye kadar harcama yapma yetkisine sahiptir."
     },
     {
      "value": "200",
      "text": "Tek seferde 100.000 TL üzeri harcama yapma yetkisine sahiptir."
     }
    ]
   }
  ]
 },
 {
  "name": "Sayfa13",
  "elements": [
   {
    "type": "checkbox",
    "name": "Soru16",
    "title": "ÇALIŞAN KARİYERİNE VE ÖDÜLLERİNE YÖN VERME YETKİSİ",
    "choices": [
     {
      "value": "10",
      "text": "Kendi bölümündeki çalışanların kariyerleri ve alacağı ödüllerle ilgili sadece görüş bilfirme yetkisine sahiptir."
     },
     {
      "value": "40",
      "text": "Sadece kendi takımındaki çalışanların kariyerlerine ve alacağı ödüllere üst yönetimle birlikte karar verme yetkisine sahiptir."
     },
     {
      "value": "60",
      "text": "Sadece kendi bölümündeki çalışanların kariyerlerine ve alacağı ödüllere kendi başına karar verme yetkisine sahiptir, Üst yönetimi aldığı  kararların sonuçları konusunda bilgilendirir."
     },
     {
      "value": "80",
      "text": "Kendisine bağlı birkaç bölümdeki çalışanların kariyerlerine ve alacağı ödüllere kendi başına karar verme yetkisine sahiptir. Üst yönetimin aldığı kararların sonuçları konusunda bilgilendirir."
     },
     {
      "value": "100",
      "text": "Şirket bütününde çalışanların kariyerlerine ve alacağı ödüllere üst yönetimle birlikte karar verme yetkisine sahiptir."
     },
     {
      "value": "200",
      "text": "Şirketin  bütününde çalışanların kariyerlerine ve alacağı ödüllere kendi başına karar verme yetkisine sahiptir. Üst yönetimi aldığı kararların sonuçları konusunda bilgilendirir."
     }
    ]
   }
  ]
 },
 {
  "name": "Sayfa14",
  "elements": [
   {
    "type": "checkbox",
    "name": "Soru17",
    "title": "DİĞER YETKİLER",
    "choices": [
     {
      "value": "30",
      "text": "Bölüm / ofisinin açılıp kapatılması"
     },
     {
      "value": "50",
      "text": "Şube alarm kurulması için yetki verme yetkisi, yani master kullanıcı yetkisine sahip olmak"
     },
     {
      "value": "200",
      "text": "Yasal mercilere karşı temsil etme ve imza yetkisi",
      "enableIf": "200"
     },
     {
      "value": "100",
      "text": "İş kazalarında  sorumluluk taşımak, iş güvenliği ile ilgili konularda ihtar verme ve işi durdurma yetkisi"
     },
     {
      "value": "101",
      "text": "İmza sirküsü  hakkı vardır"
     },
     {
      "value": "20",
      "text": "İSG kurul toplantısına katılım",
      "visibleIf": "İSG kurul toplantısına katılım",
      "enableIf": "20"
     },
     {
      "value": "102",
      "text": "Server erişimi, şifreleme ve giriş, bağlantıları kurma, yedekleme, ERP üzerindeki yeni kişi/şifre tanımlama  ve yeni firma açılması yetkisi"
     },
     {
      "value": "80",
      "text": "Nöbetçi amir olduğunda karşılaşılan problemi çözme yetkisi"
     },
     {
      "value": "51",
      "text": "Disiplin kuruluna katılım"
     },
     {
      "value": "103",
      "text": "Satınalma departmanı olmadığında acil satınalma yetkisi"
     }
    ]
   }
  ]
 }
],
"calculatedValues": [
 {
  "name": "var1"
 }
]
   }
export { jsonData };
function App() {
    const survey = new Model(jsonData);
    const alertResults = useCallback((sender) => {
      const results = JSON.stringify(sender.data);
      alert(results);
      // saveSurveyResults(
      //   "https://your-web-service.com/" + SURVEY_ID,
      //   sender.data
      // )
    }, []);
  
    survey.onComplete.add(alertResults);
  
    return <Survey model={survey} />;
  }
  
  
  
  export default App;
  // app.js
  