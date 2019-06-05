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


                    </div>

                  </div>

                  <div class="section-more">
                      <a href="./projects.php"
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
              <div class="boundary">
                <h2> </h2>
                <p>
                </p>

              </div>


            </section>

            <section>

            <div class="section-more-center">
                      <a href="./about.php"
                         hreflang="en">
                        <p>
                            See about us
                        </p>
                      </a>
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
