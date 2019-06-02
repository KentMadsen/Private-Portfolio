<!-- https://github.com/KentMadsen/EASV-Portfolio -->

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

        <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro"
              rel="stylesheet">

        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
              rel="stylesheet">

        <link href="https://fonts.googleapis.com/css?family=Comfortaa&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Merriweather&display=swap" rel="stylesheet">

        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.js">
        </script>
    </head>

    <body>
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
                  Competences
                </p>

                <div class="three-elements-container">
                  <div class="contain">
                    <p class="key">
                      <span class="bold">
                        Coding
                      </span>

                    </br>
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras egestas, diam ac fermentum tincidunt,
                                nisi ipsum venenatis turpis, a dictum velit odio sed augue.

                    </p>

                  </div>

                  <div class="contain">
                    <p class="key">
                        <span class="bold">
                          User Experience
                        </span>
                      </br>

                      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras egestas, diam ac fermentum tincidunt,
                                  nisi ipsum venenatis turpis, a dictum velit odio sed augue.

                    </p>

                  </div>

                  <div class="contain">
                    <p class="key">
                      <span class="bold">
                        Responsive Design
                      </span>
                    </br>

                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras egestas, diam ac fermentum tincidunt,
                                nisi ipsum venenatis turpis, a dictum velit odio sed augue.

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

                        <template v-for="item in listed_post_summaries">
                           <div class="card">
                             <a href="#"
                                hreflang="en"
                                title="">
                               <div>
                                 <p class="card-registered disable-select"
                                    v-html="item.registered">
                                   {{ item.registered }}
                                 </p>

                                 <p class="card-title disable-select"
                                    v-html="item.title">
                                   {{ item.title }}
                                 </p>

                                  <p class="card-summary disable-select"
                                     v-html="item.summary">
                                    {{ item.summary }}
                                  </p>
                               </div>

                               <div class="card-more">
                                 <i class="fas fa-link">
                                 </i>
                               </div>

                             </a>
                           </div>
                        </template>

                    </div>

                  </div>

                  <div class="section-more">
                      <a href="./projects.html"
                         hreflang="en">
                        <p>
                            See all projects
                        </p>
                      </a>
                    </div>

                </div>

              </div>

            </section>

            <section class="overlay-area-dark-blue">



            </section>

            <section>

            <div class="section-more-center">
                      <a href="./projects.php"
                         hreflang="en">
                        <p>
                            See about us
                        </p>
                      </a>
                    </div>

                </div>

            </section>

        </main>

      <?php
      include_once './content/footer.html';
      ?>

      <!-- Frameworks -->
      <script src=".\\install\\framework\\vue.js">
      </script>

      <!-- Scripts -->
      <script src=".\\js\\menu-application.js">
      </script>

      <script src=".\\js\\footer-navigation.js">
      </script>

      <script src=".\\js\\show-case-projects.js">
      </script>

      <!-- External Scripts -->
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-136121264-1"></script>

      <script>
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config', 'UA-136121264-1');
      </script>
       <!-- Global site tag (gtag.js) - Google Analytics -->

       <!--  -->
       <link rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
              integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
              crossorigin="anonymous">

    </body>
</html>
