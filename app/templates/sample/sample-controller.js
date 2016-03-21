export default class SampleController{
  constructor(sampleService){
    this.sampleService = sampleService;
  }

  getMessage(){
    return this.sampleService.getMessage();
  }
}

SampleController.$inject = ["sampleService"];
