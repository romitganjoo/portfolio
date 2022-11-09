/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Anti-Spoofing Door Lock Using Face Recognition and Blink Detection",
    authors:
      "Romit Ganjoo, Anjali Purohit",
    conferences:
      "IEEE 2021 6th International Conference on Inventive Computation Technologies (ICICT)",
    researchYr: 2021,
    citebox: "popup1",
    image: "assets/images/research-page/as.png",
    citation: {
      vancouver:
        "R. Ganjoo and A. Purohit, Anti-Spoofing Door Lock Using Face Recognition and Blink Detection, 2021 6th International Conference on Inventive Computation Technologies (ICICT), 2021, pp. 1090-1096, doi: 10.1109/ICICT50816.2021.9358795."},
    abstract:
      "This is currently left empty and this can be considered as a dummy data 1",
    absbox: "absPopup1",
  },

  {
    title: "Mitigating Poisoning Attacks in Federated Learning",
    authors:
      "Romit Ganjoo, Mehak Ganjoo, Madhura Patil",
    conferences:
      "Innovative Data Communication Technologies and Application",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/fl.jpg",
    citation: {
      vancouver:
      "Ganjoo, R., Ganjoo, M., Patil, M. (2022). Mitigating Poisoning Attacks in Federated Learning. In: Raj, J.S., Kamel, K., Lafata, P. (eds) Innovative Data Communication Technologies and Application. Lecture Notes on Data Engineering and Communications Technologies, vol 96. Springer, Singapore. https://doi.org/10.1007/978-981-16-7167-8_50."},
    abstract:
      "This is currently left empty and this can be considered as a dummy data 2",
    absbox: "absPopup2",
  },

  {
    title:
      "Deep Learning–Based Financial Forecasting of NSE Using Sentiment Analysis",
    authors: "Aditya Agarwal, Romit Ganjoo, Harsh Panchal, Suchitra Khojewe",
    conferences:
      "Recurrent Neural Networks",
    researchYr: 2022,
    citebox: "popup3",
    image: "assets/images/research-page/sm.png",
    citation: {
      vancouver:
        "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 3",
    absbox: "absPopup3",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
