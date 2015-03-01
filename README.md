# Реализовать простую страницу с canvas, отрисовывающую изображение
# небольшими кусочками ( вся область разбивается, например, на 20*20
# прямоугольников и каждая из подобластей отрисовывается отдельно).
# Кусочки изображений для отрисовки запрашиваются с сервера с определенной
# периодичностью ( сервер использует 3 изображения, которые передаются
# на фронтенд по очереди)
# ubuntu 14.04


sudo apt-get install git
git clone http://github.com/v-makarenko/mai-lab1
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
\curl -sSL https://get.rvm.io | bash -s stable --rails
/bin/bash --login
sudo apt-get install imagemagick libmagickwand-dev
bundle install
rails server
