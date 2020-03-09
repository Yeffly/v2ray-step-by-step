(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{325:function(a,t,v){"use strict";v.r(t);var r=v(29),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"руководство-по-настройке-v2ray"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#руководство-по-настройке-v2ray"}},[a._v("#")]),a._v(" Руководство по настройке V2Ray")]),a._v(" "),v("h2",{attrs:{id:"отказ"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#отказ"}},[a._v("#")]),a._v(" отказ")]),a._v(" "),v("p",[a._v("Этот репозиторий является веткой "),v("code",[a._v("ToutyRater / v2ray-guide")]),a._v(", спасибо, что помогли многим людям пересечь GFW.")]),a._v(" "),v("p",[a._v("Поскольку мы хотим сделать [оригинальное руководство по V2Ray] (https://github.com/ToutyRater/v2ray-guide) более ухоженным и актуальным, а также многоязычным, мы раздвоили этот новый репозиторий. , Вы можете поделиться своим опытом, переводом и исправлением этого документа, открыв выпуск. Кроме того, если вы хотите помочь нам вычитать этот перевод, пожалуйста, не стесняйтесь открывать вопрос.")]),a._v(" "),v("p",[a._v("Документы теперь лицензированы в соответствии с [BY-CC 4.0] ("),v("code",[a._v("LICENSE.md")]),a._v(").")]),a._v(" "),v("h2",{attrs:{id:"введение"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#введение"}},[a._v("#")]),a._v(" Введение")]),a._v(" "),v("p",[a._v("V2Ray - это инструмент в рамках проекта V. Проект V - это проект, который включает в себя набор инструментов для построения определенных сетевых сред, а V2Ray является основным. В руководстве по Project V сказано, что Project V - это набор инструментов, которые помогут вам создать собственную сеть конфиденциальности через Интернет. Ядро Project V, названное V2Ray, отвечает за сетевые протоколы и связь. Он может работать как автономно, так и в сочетании с другими инструментами. Однако с точки зрения времени запуска Project V имеет приоритет перед V2Ray. Если вы все еще не понимаете, то мы просто говорим, V2Ray - это аналог прокси-сервера для Shadowsocks. V2Ray может быть использован для доступа в Интернет (через цензуру), чтобы изучить передовые науки и технологии из бесплатного Интернета. ``")]),a._v(" "),v("p",[a._v("V2Ray Руководство пользователя:")]),a._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://www.v2ray.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.v2ray.com"),v("OutboundLink")],1),a._v(" (Has been blocked in China)")]),a._v(" "),v("li",[v("a",{attrs:{href:"https://v2fly.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://v2fly.org"),v("OutboundLink")],1)])]),a._v(" "),v("p",[a._v("Адрес хранилища V2Ray: "),v("a",{attrs:{href:"https://github.com/v2ray/v2ray-core",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/v2ray/v2ray-core"),v("OutboundLink")],1),a._v(" Адрес хранилища V2Ray (хранилище V2Fly): "),v("a",{attrs:{href:"https://github.com/v2fly/v2ray-core",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com /v2ray/v2ray-core"),v("OutboundLink")],1)]),a._v(" "),v("p",[a._v("Дискуссионная группа пользователей V2Ray Telegram: "),v("a",{attrs:{href:"https://t.me/v2fly_chat",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://t.me/projectv2ray"),v("OutboundLink")],1)]),a._v(" "),v("h2",{attrs:{id:"частые-вопросы-q-a"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#частые-вопросы-q-a"}},[a._v("#")]),a._v(" Частые вопросы: Q & A")]),a._v(" "),v("h4",{attrs:{id:"в-чем-разница-между-v2ray-и-shadowsocks"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#в-чем-разница-между-v2ray-и-shadowsocks"}},[a._v("#")]),a._v(" В чем разница между V2Ray и Shadowsocks?")]),a._v(" "),v("p",[a._v("Разница все еще в том, что Shadowsocks - простой прокси-инструмент; это протокол шифрования. Тем не менее, V2Ray разработан как платформа, и любой разработчик может использовать модули, предоставляемые V2Ray, для разработки нового прокси-программного обеспечения.")]),a._v(" "),v("p",[a._v("Любой, кто знаком с историей Shadowsocks, должен знать, что это самоиспользуемое программное обеспечение, разработанное clowwindy. Первоначальная цель разработки - сделать так, чтобы было проще и эффективнее пересекать межсетевой экран и цензуру. До того, как clowwindy создал Shadowsocks с открытым исходным кодом, он долгое время использовался в качестве частного прокси-протокола. Принимая во внимание, что V2Ray был разработан после того, как clowwindy получил угрозу от правительства Китая, команда Project V была разработана в знак протеста.")]),a._v(" "),v("p",[a._v("Из-за различных исторических предпосылок при рождении, они имеют разные особенности.")]),a._v(" "),v("p",[a._v("Проще говоря, Shadowsocks - это протокол с одним прокси, а V2Ray сложнее, чем прокси с одним протоколом. Звучит немного мрачно для Shadowsocks? конечно нет! С другой стороны, Shadowsocks просты в развертывании, а V2Ray имеет более сложные конфигурации при развертывании.")]),a._v(" "),v("h4",{attrs:{id:"поскоnьку-v2ray-сnожнее-зачем-мы-его-испоnьзуем"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#поскоnьку-v2ray-сnожнее-зачем-мы-его-испоnьзуем"}},[a._v("#")]),a._v(" Поскольку V2Ray сложнее, зачем мы его используем?")]),a._v(" "),v("p",[a._v("Преимущества и недостатки чего-то всегда приходят вместе. Например, V2Ray имеет следующие преимущества:")]),a._v(" "),v("ul",[v("li",[a._v("** Новый и мощный протокол: ** V2Ray использует новый протокол VMess, разработанный самим собой, который улучшает некоторые из существующих недостатков Shadowsocks и его труднее обнаружить с помощью брандмауэра.")]),a._v(" "),v("li",[a._v("** Лучшая производительность: ** Лучшая производительность сети, конкретные данные можно увидеть [официальный блог V2Ray] (https://steemit.com/cn/@v2ray/3cjiux)")]),a._v(" "),v("li",[a._v("** Дополнительные функции: ** Ниже приведены некоторые функции V2Ray:\n"),v("ul",[v("li",[a._v("mKCP: реализация протокола KCP на V2Ray, вам не нужно устанавливать другой kcptun.")]),a._v(" "),v("li",[a._v("Динамический порт: динамическое изменение порта связи для борьбы с ограничением скорости в порту с большим длительным трафиком")]),a._v(" "),v("li",[a._v("Функции маршрутизации: вы можете свободно устанавливать направление потока указанного пакета данных, блокировать рекламу и включать анти-трекинг")]),a._v(" "),v("li",[a._v("Исходящий прокси, или, скажем, цепочечный прокси, использует много ссылок для лучшей конфиденциальности")]),a._v(" "),v("li",[a._v("Запутывание: аналогично запутыванию ShadowsocksR, и пакет данных для mKCP также может быть запутан. Запутывание трафика пакетами другого трафика протокола, что делает проверку более сложной")]),a._v(" "),v("li",[a._v("Протокол WebSocket: используйте только прокси-сервер WebSocket или промежуточный прокси-сервер CDN (лучше антиблокировка)")]),a._v(" "),v("li",[a._v("Mux: мультиплексирование, дальнейшее улучшение одновременной работы прокси")])])])]),a._v(" "),v("h4",{attrs:{id:"там-нет-серебряной-пуnи"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#там-нет-серебряной-пуnи"}},[a._v("#")]),a._v(" Там нет серебряной пули")]),a._v(" "),v("p",[a._v("На данный момент V2Ray имеет следующие недостатки:")]),a._v(" "),v("ul",[v("li",[a._v("Сложная конфигурация")]),a._v(" "),v("li",[a._v("Отсутствие сторонних клиентов и услуг")])]),a._v(" "),v("h4",{attrs:{id:"кажется-v2ray-хорош-но-я-просто-хочу-пересечь-интернет-цензуру-не-хочу-тратить-сnишком-много-времени-как-я-могу-сдеnать"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#кажется-v2ray-хорош-но-я-просто-хочу-пересечь-интернет-цензуру-не-хочу-тратить-сnишком-много-времени-как-я-могу-сдеnать"}},[a._v("#")]),a._v(" Кажется, V2Ray хорош, но я просто хочу пересечь интернет-цензуру, не хочу тратить слишком много времени. Как я могу сделать?")]),a._v(" "),v("p",[a._v("Неважно, что вы делаете, есть усилие. Усилие не означает успех, но никакие усилия определенно не предполагают никакой выгоды. Но если ваше требование относительно простое, вы можете найти VPN, а не развертывать V2Ray самостоятельно.")]),a._v(" "),v("h4",{attrs:{id:"я-решиn-попробовать-развернуть-v2ray-так-как-я-могу-сnедовать-этому-руководству"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#я-решиn-попробовать-развернуть-v2ray-так-как-я-могу-сnедовать-этому-руководству"}},[a._v("#")]),a._v(" Я решил попробовать развернуть V2Ray, так как я могу следовать этому руководству?")]),a._v(" "),v("p",[a._v("Руководство пользователя V2Ray объясняет все очень подробно. В этом руководстве в основном объясняются возможности V2Ray от простого к сложному в практически доступных конфигурациях, а также делается попытка уменьшить сложность для новичков, использующих V2Ray.")]),a._v(" "),v("p",[a._v("** У пользователей этого руководства должен быть опыт работы с оболочкой Linux, например, как купить VPS, как войти в VPS через SSH, как использовать nano (или vim) для редактирования текста и некоторые основные команды Linux. Есть много руководств онлайн. Нет необходимости повторять их и писать учебник. Если у вас нет опыта, настоятельно рекомендуем вам изучить их заранее, а затем развернуть V2Ray. **")]),a._v(" "),v("p",[a._v("Это руководство можно рассматривать как простую версию руководства пользователя V2Ray или как практическое руководство по V2Ray.")]),a._v(" "),v("p",[a._v("Вы можете следовать инструкциям в этом руководстве для сборки V2Ray, не читая это руководство пользователя, но мы не рекомендуем его. Потому что это руководство просто поможет вам настроить V2Ray. Есть определенные сочетания клавиш по сравнению с руководством пользователя, и что-то игнорируется. Поэтому мы надеемся, что все потратят на прочтение руководства пользователя V2Ray.")]),a._v(" "),v("h4",{attrs:{id:"на-что-я-доnжен-обратить-внимание-тоnько-начинающий-испоnьзовать-v2ray"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#на-что-я-доnжен-обратить-внимание-тоnько-начинающий-испоnьзовать-v2ray"}},[a._v("#")]),a._v(" На что я должен обратить внимание, только начинающий использовать V2Ray?")]),a._v(" "),v("p",[a._v("Поскольку многие пользователи V2Ray имеют опыт работы с Shadowsocks, они могут в основном использовать V2Ray как Shadowsocks. Тем не менее, V2Ray не совсем то же самое, что Shadowsocks, так что мы представим различия в использовании. Обратите внимание, что разница не означает хорошо или плохо. Рекомендуется выбрать конфигурацию, соответствующую вашей сетевой среде.")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("Клиент: V2Ray сам по себе является просто ядром. GUI-клиент V2Ray - это в основном оболочка, называемая ядром V2Ray, похожая на отношения между ядром Linux и операционной системой Linux. Но многие клиенты Shadowsocks повторно реализовали протокол автора. Содержание этой статьи не предполагает использования клиентов с графическим интерфейсом в данный момент.")])]),a._v(" "),v("li",[v("p",[a._v("Политический прокси: возможно, первое воображение - это PAC. Будь то Shadowsocks (в частности, Shadowsocks-libev) или V2Ray сами не поддерживают PAC, он контролируется клиентом пользователя. В то время как Shadowsocks использует ACL, V2Ray использует свою функцию маршрутизации, и мы не говорим, хорошо это или плохо. Вы можете выбрать лучший, зависит от вас.")])]),a._v(" "),v("li",[v("p",[a._v("Поделиться ссылкой / QR-кодом: V2Ray не имеет унифицированного формата URL, как Shadowsocks, поэтому общая ссылка / QR-код каждого графического клиента V2Ray не обязательно является универсальной. Тем не менее, мы работаем над реализацией протокола протокола конечной точки V2Ray. Он предоставит универсальную ссылку для клиентов V2Ray.")])]),a._v(" "),v("li",[v("p",[a._v("Шифрование: V2Ray (в частности, протокол VMess) не любит Shadowsocks, который подчеркивает выбор шифрования, а шифрование VMess определяется клиентом, а сервер адаптивен.")])]),a._v(" "),v("li",[v("p",[a._v("Время: при использовании протокола VMess от V2Ray необходимо обеспечить точное время как для клиента, так и для сервера, поскольку это для безопасного проектирования.")])]),a._v(" "),v("li",[v("p",[a._v("Пароль: V2Ray (VMesss) использует только UUID, который действует как пароль Shadowsocks, но случайность намного лучше, чем пароль Shadowsocks, но его неудобно запоминать (противоречие безопасности и удобства).")])]),a._v(" "),v("li",[v("p",[a._v("UDP relay: VMess - это потоковый протокол на основе TCP. Для пакетов UDP VMess будет преобразован в поток TCP, а затем ретранслирует пакеты, то есть UDP через TCP. Чтобы включить UDP, вы можете включить UDP в протоколе socks клиента. Однако обратите внимание, что это не очень хорошо для ускорения игры.")])]),a._v(" "),v("li",[v("p",[a._v("Прокси шлюза: На самом деле они ничем не отличаются. Не думайте, что вы не сможете использовать их на роутере без плагинов.")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);