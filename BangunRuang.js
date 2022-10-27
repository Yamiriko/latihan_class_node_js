class Balok{
  constructor(pjg=0,lbr=0,tgg=0){
    this.pjg=pjg;
    this.lbr=lbr;
    this.tgg=tgg;
  }
}
function VolumeBalok(pjg=0,lbr=0,tgg=0) {
  const hasil = pjg*lbr*tgg;
  return hasil;
}

class Kubus{
  constructor(sisi1=0,sisi2=0,sisi3=0){
    this.sisi1=sisi1;
    this.sisi2=sisi2;
    this.sisi3=sisi3;
  }
}
function VolumeKubus(sisi1=0,sisi2=0,sisi3=0) {
  const hasil = sisi1*sisi2*sisi3;
  return hasil;
}

const blk = new Balok(2,3,4);
const volumeBalok = VolumeBalok(blk.pjg,blk.lbr,blk.tgg);
console.log('Volume Balok : ' + volumeBalok);

const kbs = new Kubus(2,2,2);
const volumeKubus = VolumeKubus(kbs.sisi1,kbs.sisi2,kbs.sisi2);
console.log('Volume Kubus : ' + volumeKubus);