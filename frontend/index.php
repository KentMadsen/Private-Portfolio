<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">

        <meta name="viewport"
              content="width=device-width, initial-scale=1.0">

        <meta http-equiv="X-UA-Compatible"
              content="ie=edge">

        <title>
          Designermadsen - Hi, i am coder
        </title>

        <link rel="stylesheet"
              href="./css/style.css">

        <?php
          include_once './content/font.html';
        ?>
    </head>

    <body>
      <div id="application-framework">
        <?php
          include_once './content/header.html';
        ?>

          <main>
            <section>
              <div class="boundary">
                <div class="frontpage">
                  <p class="frontpage-title">
                    Hi, I am a coder
                  </p>
                </div>
              </div>
            </section>

            <section class="overlay-area-gray">
              <div class="boundary">
                <p class="section-name">
                  Interesse områder
                </p>

                <div class="three-elements-container">
                  <div class="contain">
                    <p class="key">
                      <span class="bold">
                        Kodning
                      </span>
                    </p>

                    <p class="text-area"> 
                      Kan programmere i PHP, Java, samt webdevelopment. HTML, CSS og JavaScript
                    </p>

                  </div>

                  <div class="contain">
                    <p class="key">
                        <span class="bold">
                          User Experience
                        </span>
                    </p>

                    <p class="text-area"> 
                      Går op i at lave simple løsninger, der er nemme at navigere for brugeren
                    </p>

                  </div>

                  <div class="contain">
                    <p class="key">
                      <span class="bold">
                        Responsive Design
                      </span>
                    </p>

                    <p class="text-area"> 
                      Lave moderne hjemmesider, som ved hjælp af css media queries, er mobil venlige
                    </p>
                  </div>

                </div>
              </div>
            </section>

            <section>
              <div id="showcase-projects"
                   class="boundary">

                <div>

                  <p class="section-name">
                    Projects
                  </p>

                  <p class="section-option-description" hidden>
                      Tools
                  </p>

                  <div id="showcase-filter-area">
                    <ul>
                      <!-- Senere -->
                    </ul>
                  </div>

                  <!-- Project -->
                  <div>

                    <div class="card-container">

                      <template v-for="post in listed_post_summaries"> 
                        <div class="card"> 
                          
                          <a v-bind:href="post.uri"> 
                            <div> 
                              <p class="card-registered"> 
                                {{post.registered}} 
                              </p>
                              
                              <p class="card-title"> 
                                {{post.title}} 
                              </p>

                              <p class="card-summary"> 
                                {{post.summary}} 
                              </p>

                            </div>

                            <div class="card-more" v-html="post.uri_content">
                              {{post.uri_content}}

                            </div>

                          </a>

                        </div>
                      </template>

                    </div>

                  </div>


              </div>

            </section>

            <section class="overlay-area-gray">
              <div class="boundary">
                <h2 class="section-name"> 
                  Hvem jeg er 
                </h2>

                <p class="text-area center-text">
                  Hej, Mit navn er Kent vejrup Madsen. Jeg en 24 årig knight, der igang med at blive uddannet til Multimediadesigner AK.
                </br>
                  Med interesse indenfor kodning og grafik. Som hovedpunkt så det der fanger mig, er at løse problemstillinger og være pragmatisk.
                </p>

                <h2 class="section-name"> 
                  Kontakt 
                </h2>
                
                <div class="column">
                  <p class="text-area">
                  <span class="bold"> 
                    Telefon
                  </span> 
                  </p>

                  <p class="text-area"> 
                    51 90 29 14
                  </p>
                </div>

                <div class="column">
                  <p class="text-area"> 
                  <span class="bold"> 
                    E-mail
                  </span>
                  </p>

                  <p class="text-area"> 
                    Kent.vejrup.madsen@outlook.com
                  </p>
                </div>

                <div class="column">
                  <p class="text-area"> 
                  <span class="bold"> 
                    Addresse
                  </span>
                  </p>

                  <p class="text-area"> 
                    Kirkebakken 39, </br>
                    6705, </br>
                    Danmark
                  </p>
                </div>

              </div>

            </section>


            </div>
        </main>
    </div>
    
    <?php

      include_once './content/footer.html';
      
      include_once './content/content.html';
    ?>


    </body>
</html>
