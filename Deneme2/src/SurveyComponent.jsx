const React = require("react");
const { Model } = require("survey-core");
const { Survey } = require("survey-react-ui");
require("survey-core/defaultV2.min.css");
const SurveyTheme = require("survey-core/themes");
require("./index.css");
const { jsonData } = require("./app.js");
const { Serializer } = require("survey-core");
const FileSaver = require("file-saver");




Serializer.addProperty("Soru", {
  name: "value:number"
});

function SurveyComponent() {
  const survey = new Model(jsonData);
  survey.applyTheme(SurveyTheme.ContrastLightPanelless);

  function calculateMaxScore(Sorular) {
    var maxScore = 0;
    Sorular.forEach((Soru) => {
      if (Soru.choices) {
        const maxValue = Math.max.apply(Math, Soru.choices.map(o => o.score));
        maxScore += maxValue;
      }
    });
    return maxScore;
  }
  
  function calculateTotalScore(Soru) {
    var totalScore = 0;
    Soru.forEach((item) => {
      const qValue = item.value;
      
      // Eğer checkbox işaretlenmişse, puanı toplam puana ekle
      if (qValue) {
        totalScore += parseInt(qValue) || 0;
      }
    });
    return totalScore;
  }

  survey.onComplete.add((sender, options) => {
    
    const maxScore = calculateMaxScore(sender.getAllQuestions());
    // Get survey results as a flat data array
   
    const plainData = sender.getPlainData({
      // Include `score` values into the data array
      calculations: [{ propertyName: "value" }]

    });
    const totalScore = calculateTotalScore(plainData);

    // Save the scores in survey results
    sender.setValue("maxScore", maxScore);
    sender.setValue("totalScore", totalScore);
    const pdfUrl="localhost:3000";
    FileSaver.saveAs(pdfUrl,"localhost:3000")

    if (totalScore < 500) {
      const pdfUrl = "https://drive.google.com/open?id=1Nmep61h9_uTfqXFbL-IVttXcsPd2dC6L&authuser=0";
      FileSaver.saveAs(pdfUrl, "model.pdf");
    } else if (totalScore > 500) {
      const pdfUrl = "https://drive.google.com/file/d/1GnxoVZhH3t0p1LTlUMaWMZG6t4XWFgFg/view";
      FileSaver.saveAs(pdfUrl, "aday.pdf");
    }
    
  });
  return <Survey model={survey} />;
}

export default SurveyComponent;

