(function () {
    var floatingButton = document.createElement('a');
    floatingButton.href = 'https://api.whatsapp.com/send?phone=556536323100';
    floatingButton.target = '_blank';
    floatingButton.className = 'floating-button';

    var whatsappIcon = document.createElement('i');
    whatsappIcon.className = 'fab fa-whatsapp';

    var element = document.createElement('div');
    element.className = 'tooltip';

    var tooltip = document.createElement('span');
    tooltip.className = 'tooltiptext';
    tooltip.textContent = 'Clique aqui para falar com um atendente!';

    document.body.appendChild(floatingButton);
    floatingButton.appendChild(whatsappIcon);
    element.appendChild(tooltip);

    var script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/8e728b237c.js';
    script.crossOrigin = 'anonymous';
    var style = document.createElement('style');

    style.innerHTML = `
      .floating-button {
        position: fixed;
        bottom: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: green;
        color: white;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
      }
      
      .floating-button i {
        font-size:40px;
        margin-top:4px
      }
      .tooltip {
        position: fixed;
        bottom:80px;
        display: inline-block;
        cursor: pointer;
      }
      
      .tooltip .tooltiptext {
        display: hidden;
        width: 120px;
        background-color: #555;
        color: #fff;
        text-align: center;
        padding: 5px;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 20%;
        // transform: translateX(-50%);
        opacity: 0;
        transition: opacity 0.3s;
      }
      
    //   .tooltip .tooltiptext {
    //     display: hidden;
    //     opacity: 1;
    //   }
    `;
    floatingButton.addEventListener("mouseenter", function () {
        const tooltip = document.querySelector('.tooltip .tooltiptext');
        tooltip.style.display = 'visible';
        tooltip.style.opacity = "1"
    });

    floatingButton.addEventListener("mouseleave", function () {
        const tooltip = document.querySelector('.tooltip .tooltiptext');
        tooltip.style.display = 'hidden';
        tooltip.style.opacity = "0"
    });

    document.head.appendChild(style);
    document.body.appendChild(script);
    document.body.appendChild(element);

})();