import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

// Компоненты страниц
const Home = () => (
  <div className="header__main">
    <div className="container">
      <div className="header__main-flexbox">
        <div className="header__info">
          <h1 className="header__info-title">Интересные развлечения в России</h1>
          <p className="header__info-text">
            Россия предлагает богатый выбор интересных развлечений для посетителей всех возрастов и интересов. 
            От культурных мероприятий в виде посещения театров и музеев до активного отдыха на природе, 
            в этой стране можно найти множество увлекательных занятий. Россия - это страна, где каждый 
            найдет что-то интересное и увлекательное для себя, будь то история, культура, природа или 
            активный отдых.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Places = () => (
  <main className="main">
    <div className="main__container container">
      <div className="main__places">
        <div className="main__place">
          <div className="main__place-title">
           
          </div>
         
          
        </div>

        <div className="main__place">
          <div className="main__place-title">
            <span className="main__place-title-name numeration" />
            <h2 className="main__place-title-name">Озеро Байкал, Иркутская область</h2>
          </div>
          <div className="main__place-image">
            <img
              className="main__place-image-icon"
              src="../../images/place-baykal.jpg"
              alt="Байкал"
            />
          </div>
          <div className="main__place-info">
            <p className="main__place-info-text">
              Озеро Байкал - это самое глубокое и крупнейшее пресноводное озеро на планете.
              Расположено в Восточной Сибири, оно является одним из самых удивительных природных
              явлений мира. Своими размерами и уникальной экосистемой озеро завораживает ученых и
              путешественников. Байкал известен своей чистотой и прозрачностью воды, а также
              богатством удивительных видов растений и животных, включая байкальскую нерпу. Его
              окружают живописные горы и леса, создавая удивительные пейзажи. Озеро также обладает
              геологической ценностью, содержа множество удивительных гидротермальных и
              геологических образований. Поездка к Байкалу - это не просто отдых, это погружение в
              удивительный мир природы, который оставит незабываемые впечатления.
            </p>
          </div>
        </div>

        <div className="main__place">
          <div className="main__place-title">
            <span className="main__place-title-name numeration" />
            <h2 className="main__place-title-name">Красная площадь, Москва</h2>
          </div>
          <div className="main__place-image">
            <img
              className="main__place-image-icon"
              src="../../images/place-krasnay-ploshad.jpg"
              alt="Красная площадь"
            />
          </div>
          <div className="main__place-info">
            <p className="main__place-info-text">
              Красная площадь - это историческая и культурная сердцевина Москвы и одна из самых
              известных площадей в мире. Расположенная у подножия Кремля, она является символом
              России и местом проведения различных культурных и политических событий. На площади
              можно увидеть такие значимые архитектурные памятники, как Храм Василия Блаженного, ГУМ,
              Мавзолей Ленина и исторический музей. Красная площадь окружена знаменитыми зданиями,
              каждое из которых несет в себе часть истории России. Это место притягивает туристов со
              всего мира своими красочными праздниками, парадами и яркими огнями во время
              празднования Нового года.
            </p>
          </div>
        </div>

        <div className="main__place">
          <div className="main__place-title">
            <span className="main__place-title-name numeration" />
            <h2 className="main__place-title-name">Эльбрус, Кавказ</h2>
          </div>
          <div className="main__place-image">
            <img
              className="main__place-image-icon"
              src="../../images/place-elbrus.jpg"
              alt="Эльбрус"
            />
          </div>
          <div className="main__place-info">
            <p className="main__place-info-text">
              Эльбрус - это высочайшая гора в России и в Европе, расположенная в Кавказских горах.
              Состоит из двух вершин: западной (5642 м) и восточной (5621 м). Эльбрус привлекает
              множество альпинистов и туристов со всего мира своей величественной красотой и
              возможностями для совершения восхождений. Гора имеет важное историческое значение и
              считается священным местом для местных народов. Вокруг Эльбруса раскинулись
              живописные ледники, а с самой вершины открывается потрясающий вид на окружающие горные
              вершины и долины. Поездка к Эльбрусу – это незабываемое приключение и возможность
              погрузиться в мир высокогорной природы.
            </p>
          </div>
        </div>

        <div className="main__place">
          <div className="main__place-title">
            <span className="main__place-title-name numeration" />
            <h2 className="main__place-title-name">Долина Гейзеров, Камчатка</h2>
          </div>
          <div className="main__place-image">
            <img
              className="main__place-image-icon"
              src="../../images/place-dolina-geyzerov.jpeg"
              alt="Долина Гейзеров"
            />
          </div>
          <div className="main__place-info">
            <p className="main__place-info-text">
              Долина гейзеров на Камчатке - это уникальное природное явление, представляющее собой
              одно из крупнейших гейзерных полей в мире. Расположенная на севере полуострова, она
              поражает своими мощными и разнообразными гейзерами, кипящими источниками, кипятящими
              грязевыми вулканами и красочными минеральными озерами. Долина гейзеров на Камчатке -
              это место, где природа демонстрирует свою силу и красоту, создавая удивительные пейзажи
              и атмосферу удивления и восхищения.
            </p>
          </div>
        </div>

        <div className="main__place">
          <div className="main__place-title">
            <span className="main__place-title-name numeration" />
            <h2 className="main__place-title-name">Эрмитаж, Санкт-Петербург</h2>
          </div>
          <div className="main__place-image">
            <img
              className="main__place-image-icon"
              src="../../images/place-ermitazh.jpg"
              alt="Эрмитаж"
            />
          </div>
          <div className="main__place-info">
            <p className="main__place-info-text">
              Эрмитаж - это один из крупнейших музеев мира, расположенный в Санкт-Петербурге,
              Россия. Здание музея само по себе представляет историческую ценность, так как было
              построено в 18 веке и является одним из символов города. В коллекции Эрмитажа
              насчитывается более трёх миллионов произведений искусства и артефактов, начиная от
              древних артефактов до произведений европейских мастеров. Музей включает в себя
              несколько зданий, включая Зимний дворец, где находится знаменитая Эрмитажная картинная
              галерея. Эрмитаж - это не только музей, но и культурный центр, привлекающий миллионы
              туристов и ценителей искусства со всего мира.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
);



const Entertainment = () => (
  <main className="main">
    <div className="main__container container">
      <div className="main__places">
        <div className="main__place">
          <div className="main__place-title">
            <span className="main__place-title-name numeration" />
            <h2 className="main__place-title-name">Аквапарк «Золотая бухта», Геленджик</h2>
          </div>

          <div className="main__place-image">
            <img
              className="main__place-image-icon"
              src="../../images/place-aquapark.jpg"
              alt="Аквапарк"
            />
          </div>

          <div className="main__place-info">
            <p className="main__place-info-text">
              Самый большой открытый аквапарк в России находится в Геленджике. Аквапарк "Золотая
              Бухта" в Геленджике - это крупный развлекательный комплекс, предлагающий посетителям
              разнообразные аттракционы и активности для отдыха и развлечений. В аквапарке можно найти
              водные горки различной сложности, бассейны с волнами, детские зоны, спа-услуги и
              множество других развлечений для посетителей всех возрастов. "Золотая Бухта"
              отличается красивым дизайном, ухоженной территорией и дружелюбным персоналом, создавая
              атмосферу комфорта и удовольствия для гостей.
            </p>
          </div>
        </div>

        <div className="main__place">
          <div className="main__place-title">
            <span className="main__place-title-name numeration" />
            <h2 className="main__place-title-name">Горнолыжный курорт "Роза Хутор", Сочи</h2>
          </div>

          <div className="main__place-image">
            <img
              className="main__place-image-icon"
              src="../../images/place-resort.jpg"
              alt="Горнолыжный курорт"
            />
          </div>

          <div className="main__place-info">
            <p className="main__place-info-text">
              Горнолыжный курорт "Роза Хутор" - один из самых известных и популярных горнолыжных
              курортов в России, расположенный в курортном поселке Красная Поляна недалеко от города
              Сочи. "Роза Хутор" прославился благодаря своим разнообразным трассам для катания на
              лыжах и сноуборде, высокому уровню сервиса и современной инфраструктуре. Курорт
              предлагает возможности для катания как для начинающих, так и для опытных лыжников и
              сноубордистов, а также различные развлекательные мероприятия, рестораны и гостиничные
              комплексы.
            </p>
          </div>
        </div>

        <div className="main__place">
          <div className="main__place-title">
            <span className="main__place-title-name numeration" />
            <h2 className="main__place-title-name">Алтайский заповедник, Алтайские горы</h2>
          </div>

          <div className="main__place-image">
            <img
              className="main__place-image-icon"
              src="../../images/place-altay.jpg"
              alt="Алтайский заповедник"
            />
          </div>

          <div className="main__place-info">
            <p className="main__place-info-text">
              Алтайский заповедник - это один из самых крупных заповедников в России, расположенный в
              живописных Алтайских горах. Он был создан для сохранения уникальной флоры и фауны этого
              региона, а также для исследований и научных целей. В заповеднике обитает множество
              видов редких и исчезающих животных, таких как снежный барс, ибекс, орлан-белохвост, а
              также разнообразные растения. Посещение заповедника контролируется и возможно только с
              соблюдением специальных правил и разрешений.
            </p>
          </div>
        </div>

        <div className="main__place">
          <div className="main__place-title">
            <span className="main__place-title-name numeration" />
            <h2 className="main__place-title-name">Парк развлечений "Римская Империя"</h2>
          </div>

          <div className="main__place-image">
            <img
              className="main__place-image-icon"
              src="../../images/place-roman-empire.jpg"
              alt="Парк развлечений"
            />
          </div>

          <div className="main__place-info">
            <p className="main__place-info-text">
              Парк развлечений "Римская Империя" - это тематический парк, вдохновленный древним Римом
              и его культурой. Здесь посетители могут окунуться в атмосферу античности,
              познакомиться с историей Римской империи, увидеть реплики знаменитых памятников и
              сооружений, а также насладиться различными аттракционами и шоу, отражающими дух того
              времени.
            </p>
          </div>
        </div>

        <div className="main__place">
          <div className="main__place-title">
            <span className="main__place-title-name numeration" />
            <h2 className="main__place-title-name">Московский зоопарк, Москва</h2>
          </div>

          <div className="main__place-image">
            <img
              className="main__place-image-icon"
              src="../../images/place-zoo.jpg"
              alt="Московский зоопарк"
            />
          </div>

          <div className="main__place-info">
            <p className="main__place-info-text">
              Московский зоопарк – это один из крупнейших и старейших зоопарков не только в России,
              но и в мире. Он был основан в 1864 году и насчитывает более 6000 животных различных
              видов. Зоопарк расположен в центре Москвы и является популярным местом отдыха для
              жителей и гостей столицы. Здесь можно увидеть разнообразных обитателей – от крупных
              хищников до экзотических птиц и рептилий.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
);


const Facts = () => (
  <div className="container">
    <main className="main">
      <div className="main__container container">
        <div className="main__places">
          <div className="main__facts">
            <ul className="main__facts-list">
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  Россия - крупнейшая страна в мире по площади, занимая более 17 миллионов квадратных километров.
                </p>
              </li>
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  Россия простирается через 11 часовых поясов, что делает ее одной из самых больших по территории и географическому разнообразию стран.
                </p>
              </li>
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  Москва - столица России и крупнейший город страны, с населением более 12 миллионов человек.
                </p>
              </li>
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  Россия располагает самым длинным железнодорожным путём в мире - Транссибирской магистралью, протяженностью более 9,2 тысяч километров.
                </p>
              </li>
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  Россия является одним из лидеров мирового производства и экспорта зерна.
                </p>
              </li>
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  Россия имеет самый большой запас леса в мире, охватывающий более 800 миллионов гектаров.
                </p>
              </li>
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  Волга - самая длинная река в Европе и одна из крупнейших рек в мире, протяженностью более 3,600 км.
                </p>
              </li>
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  Россия была первой страной в мире, которая установила космический спутник - Спутник-1 в 1957 году.
                </p>
              </li>
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  Первый космонавт Юрий Гагарин - родился в России и стал первым человеком, совершившим полёт в космос в 1961 году.
                </p>
              </li>
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  Россия является домом для уникальных арктических животных, таких как белый медведь, морж и нарвал.
                </p>
              </li>
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  Россия имеет одну из самых сложных и разнообразных климатических зон в мире, от субтропического климата на черноморском побережье до арктического климата на севере.
                </p>
              </li>
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  Россия является домом для уникальных арктических видов растений, таких как лишайники, мхи и карликовые кустарники.
                </p>
              </li>
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  Россия имеет одну из самых больших армий в мире, включая стратегические ядерные силы.
                </p>
              </li>
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  Россия является одним из крупнейших производителей и экспортеров оружия и военной техники в мире.
                </p>
              </li>
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  В России находится самое глубокое озеро в мире – Байкал, с максимальной глубиной 1637 метров.
                </p>
              </li>
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  В России находится самый длинный мост в Европе – Большой Обуховский мост, протяженностью 2,5 километров.
                </p>
              </li>
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  В России находится самый большой в мире заповедник – Таймырский заповедник, занимающий площадь более 4 миллионов гектаров.
                </p>
              </li>
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  Россия является одной из немногих стран, где можно увидеть все виды медведей – бурый, белый (гималайский), чёрный и пещерный.
                </p>
              </li>
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  В России находится самый большой в мире музей под открытым небом – Музей-заповедник «Куликово поле».
                </p>
              </li>
              <li className="main__fact">
                <span className="main__fact-text numeration" />
                <p className="main__fact-text">
                  В России находится самый большой в мире воздушный шар – воздушный шар в городе Калуга, диаметр которого составляет 50 метров.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
);





function App() {
const [toggleButton, setToggleButton] = useState(false)

  return (
    <Router>
      <div>
        <header className="header">
          <div className="header__inner">
            <div className="header__container container">
              <h1 className="header__title">
                <NavLink to="/">Моя Россия</NavLink>
              </h1>

              <button onClick={()=>setToggleButton(!toggleButton)} className="header__menu-burger">
                <span />
                <span />
                <span />
              </button>

              
            <div className="header_side_bar-active" style={{
              width: toggleButton ? '70%' : '0',
              alignContent: 'center'
            }}>
              <nav className="header__menu-active" >
                <ul className="header__menu-list-active" style={{
                  display: toggleButton ? 'flex' : 'none'
                }} >
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `header__menu-link ${isActive ? 'active' : ''}`
                      }
                    >
                      О проекте
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/places"
                      className={({ isActive }) =>
                        `header__menu-link ${isActive ? 'active' : ''}`
                      }
                    >
                      Интересные места
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/entertainment"
                      className={({ isActive }) =>
                        `header__menu-link ${isActive ? 'active' : ''}`
                      }
                    >
                      Развлечения
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/facts"
                      className={({ isActive }) =>
                        `header__menu-link ${isActive ? 'active' : ''}`
                      }
                    >
                      Факты
                    </NavLink>
                  </li>
                </ul>
              </nav>
              </div>
              <nav className="header__menu" >
                <ul className="header__menu-list" >
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `header__menu-link ${isActive ? 'active' : ''}`
                      }
                    >
                      О проекте
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/places"
                      className={({ isActive }) =>
                        `header__menu-link ${isActive ? 'active' : ''}`
                      }
                    >
                      Интересные места
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/entertainment"
                      className={({ isActive }) =>
                        `header__menu-link ${isActive ? 'active' : ''}`
                      }
                    >
                      Развлечения
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/facts"
                      className={({ isActive }) =>
                        `header__menu-link ${isActive ? 'active' : ''}`
                      }
                    >
                      Факты
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Переместил содержимое Home в Routes */}
          <Routes>
            <Route
              path="/"
              element={
                <div className="header__main">
                  <div className="container">
                    <div className="header__main-flexbox">
                      <div className="header__info">
                        <h1 className="header__info-title">О проекте</h1>
                        <p className="header__info-text">
                          Добро пожаловать на мой сайт, созданный специально для Итогового
                          Индивидуального Проекта. Этот сайт посвящен России. На нем вы найдете
                          различную информацию о России, такую как:
                        </p>
                        <ul className="header__info-list">
                          <li>1. Интересные места России</li>
                          <li>2. Интересные развлечения в России</li>
                          <li>3. Интересные факты о России</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="/places" element={<Places />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/facts" element={<Facts />} />
          </Routes>
        </header>

        <footer className="footer">
          <div className="footer__container container">
            <div className="footer__flexbox">
              <h3 className="footer__title">О сайте</h3>
              <p className="footer__info">
                Этот сайт сделал ученик 10 - класса ЦО №162 Зубков Иван для Итогового
                Индивидуального Проекта
              </p>
              <p className="footer__data">2025</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;