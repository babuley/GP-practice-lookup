const practices = [
  {
    id: 1,
    name: "CHURCH LANE SURGERY",
    slug: "CHURCH-LANE-SURGERY",
    code: "B82032",
    address: "CHURCH LANE BOROUGHBRIDGE	YORK",
    postcode: "YO51 9BD",
    contact: {
      phone: "01423 322309"
    }
  },
  {
    id: 2,
    name: "LENSFIELD MEDICAL PRAC",
    slug: "LENSFIELD-MEDICAL-PRAC",
    code: "D81001",
    address: "48 LENSFIELD ROAD CAMBRIDGE CAMBRIDGESHIRE",
    postcode: "CB2 1EH",
    contact: {
      phone: ""
    }
  }
];

const consultants = [
  { id: 1, name: "WATSON AC", gmc: "G8847980", practices: [1] }
];

const newPractice = {
  id: 1,
  name: "",
  slug: "",
  code: "",
  address: "",
  postcode: "",
  contact: {
    phone: ""
  }
};

const newConsultant = {
  id: null,
  name: "",
  gmc: "",
  practices: []
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newPractice,
  newConsultant,
  practices,
  consultants
};
