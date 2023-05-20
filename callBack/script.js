setTimeout(() => {
  const outputElement = document.getElementById("output");
  outputElement.innerHTML += "<div>10</div>";

  setTimeout(() => {
    outputElement.innerHTML += "<div>9</div>";

    setTimeout(() => {
      outputElement.innerHTML += "<div>8</div>";

      setTimeout(() => {
        outputElement.innerHTML += "<div>7</div>";

        setTimeout(() => {
          outputElement.innerHTML += "<div>6</div>";

          setTimeout(() => {
            outputElement.innerHTML += "<div>5</div>";

            setTimeout(() => {
              outputElement.innerHTML += "<div>4</div>";

              setTimeout(() => {
                outputElement.innerHTML += "<div>3</div>";

                setTimeout(() => {
                  outputElement.innerHTML += "<div>2</div>";

                  setTimeout(() => {
                    outputElement.innerHTML += "<div>1</div>";
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
