/*<script>
                        // **Js for split text into letters jejexd
                        const text = document.querySelector('.text');
                        text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>"); 

                        //Now, add active class on hovered <span> tag o como sea tio
                        const letters = document.querySelectorAll('span');
                        letters.forEach((letter) => {
                            letter.addEventListener('mouseover', function (){
                                this.classList.add('active');
                            });
                        });
                          //como no funcionaba, agregué una función de cierre (closure) para capturar el índice i
                          //(function (index){
                            //letters[index].addEventListener("mouseover", function (){
                              //  letters[index].classList.add('active');
                            //});
                          //})(i);
                         // letters[i].addEventListener("mouseover", function(){
                           // letters[i].classList.add('active') 
                          //)
                        //}
                    </script>      
                    este era el código que tenia en el HTML */
                    document.addEventListener('DOMContentLoaded', function() {
                        // Obtener todas las letras individuales dentro de la clase .text
                        const letters = document.querySelectorAll('.text span');
                                          
                        // Agregar el evento 'mouseover' a cada letra para activar la clase 'active'
                        letters.forEach(letter => {
                            letter.addEventListener('mouseover', function() {
                                this.classList.add('active');
                            });
                        });
                    });
                                          