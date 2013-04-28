var chart;
var legend;

var chartDataRegion = [{
  region: "Africa",
  saved: 55},
  {
    region: "South America",
    saved: 70},
  {
    region: "Asia",
    saved: 40},
  {
    region: "Middle East",
    saved: 10},
  {
    region: "Europe",
    saved: 70},
  {
    region: "North America",
    saved: 60},
  {
    region: "Australasia",
    saved: 55}];

var chartDataEthnicity = [{
  ethnicity: "Hispanic",
  saved: 50},
  {
    ethnicity: "Indian",
    saved: 30},
  {
    ethnicity: "Arabic",
    saved: 8},
  {
    ethnicity: "Chinese",
    saved: 8},
  {
    ethnicity: "Afroamerican",
    saved: 40},
  {
    ethnicity: "African",
    saved: 50},
  {
    ethnicity: "Caucasian",
    saved: 65}];

var chartDataReligion = [{
  religion: "Catholic",
  saved: 63},
  {
    religion: "Protestant",
    saved: 60},
  {
    religion: "Christian Other",
    saved: 65},
  {
    religion: "Islam",
    saved: 10},
  {
    religion: "Hinduism",
    saved: 35},
  {
    religion: "Buddhism",
    saved: 57},
  {
    religion: "Sikhism",
    saved: 23},
  {
    religion: "Judaism",
    saved: 68},
  {
    religion: "Atheist",
    saved: 55}];


AmCharts.ready(function() {
  // PIE CHART Region
  chartRegion = new AmCharts.AmPieChart();
  chartRegion.color = '#fff';
  chartRegion.dataProvider = chartDataRegion;
  chartRegion.titleField = "region";
  chartRegion.valueField = "saved";
  chartRegion.outlineColor = "#FFFFFF";
  chartRegion.outlineAlpha = 0.8;
  chartRegion.outlineThickness = 2;

  // WRITE
  chartRegion.write("chartdiv1");

  // PIE CHART Ethnicity
  chartRegion = new AmCharts.AmPieChart();
  chartRegion.color = '#fff';
  chartRegion.dataProvider = chartDataEthnicity;
  chartRegion.titleField = "ethnicity";
  chartRegion.valueField = "saved";
  chartRegion.outlineColor = "#FFFFFF";
  chartRegion.outlineAlpha = 0.8;
  chartRegion.outlineThickness = 2;

  // WRITE
  chartRegion.write("chartdiv2");

  // PIE CHART Religion
  chartRegion = new AmCharts.AmPieChart();
  chartRegion.color = '#fff';
  chartRegion.dataProvider = chartDataReligion;
  chartRegion.titleField = "religion";
  chartRegion.valueField = "saved";
  chartRegion.outlineColor = "#FFFFFF";
  chartRegion.outlineAlpha = 0.8;
  chartRegion.outlineThickness = 2;

  // WRITE
  chartRegion.write("chartdiv3");
});

