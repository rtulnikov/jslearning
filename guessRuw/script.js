// ========================
// ДАННЫЕ РЫЦАРСКИХ ОРДЕНОВ
// ========================
const orders = [
    {
        name: "ОРДЕН ДНЯ",
        hint: "Золотые рыцари, служители света. Их название связано с небесным светилом, которое дарит жизнь.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Позолоченный рыцарский шлем с забралом, украшенный солнечными узорами</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Золочёные латные доспехи с гравировкой лучей на груди и плечах</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Большой золотой щит с символом солнца — ярко-жёлтый диск на белом поле</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Длинный рыцарский меч с золотым навершием, тяжёлая кавалерийская пика</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Белый боевой конь в золотой попоне с солнечной символикой</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Белый плащ с золотой каймой, на спине — вышитое солнце</span>`
    },
    {
        name: "ОРДЕН ЛУНЫ",
        hint: "Серебряные воины ночи. Их название связано с ночным светилом, противоположностью солнца.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Серебристый шлем с полумесяцем на лбу, тонкая гравировка лунных фаз</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Полированные стальные латы серебристого цвета, отражающие лунный свет</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Серебряный щит с символом полумесяца на тёмно-синем фоне</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Изогнутая сабля «лунный клинок», лёгкое копьё для стремительных атак</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Серый жеребец в серебристой попоне с полумесяцами</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Тёмно-синий плащ с серебряной вышивкой полумесяца</span>`
    },
    {
        name: "ОРДЕН ДРАКОНА",
        hint: "Зелёные рыцари, чей символ — мифическое крылатое существо, извергающее пламя.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Шлем с нашлемником в виде головы дракона, зелёное оперение</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Чешуйчатый доспех из зелёной стали, имитирующий драконью чешую</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Зелёный каплевидный щит с изображением дракона, расправившего крылья</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Двуручный меч «Драконий клык», тяжёлая пика с наконечником в виде когтя</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Тёмно-зелёный боевой конь в чешуйчатой попоне</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Зелёный плащ с вышитым драконом, подкладка красного цвета</span>`
    },
    {
        name: "ОРДЕН ФЕНИКСА",
        hint: "Огненные рыцари. Их символ — мифическая птица, возрождающаяся из пепла.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Шлем с красно-оранжевым гребнем, напоминающим огненный хохолок</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Красно-оранжевые латы с градиентным покрытием, словно объятые пламенем</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Щит алого цвета с символом феникса — птица в кольце пламени</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Пылающий клинок (символически), длинный меч с рубиновым навершием</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Рыжий жеребец в красно-оранжевой попоне с огненными узорами</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Красный плащ с оранжевой каймой, вышитая птица феникс на спине</span>`
    },
    {
        name: "ОРДЕН ВОРОНА",
        hint: "Тёмные рыцари. Их символ — чёрная птица, предвестник смерти и войны.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Чёрный шлем с нашлемником в виде вороньих крыльев, узкие прорези глаз</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Чёрные воронёные латы, матовое покрытие, поглощающее свет</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Чёрный щит с серебряным силуэтом ворона, расправившего крылья</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Чёрный боевой меч, арбалет с болтами, кинжал за поясом</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Вороной конь в чёрной попоне с серебряной каймой</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Чёрный плащ с бахромой, силуэт ворона вышит серебристой нитью</span>`
    },
    {
        name: "ОРДЕН ЗМЕИ",
        hint: "Коварные рыцари. Их символ — пресмыкающееся, ассоциирующееся с ядом и хитростью.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Шлем с нашлемником в виде змеиной головы с раскрытой пастью</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Змеиная кольчуга — чешуйчатый доспех зелёно-фиолетового оттенка</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Круглый щит с изображением змеи, свернувшейся кольцом (уроборос)</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Изогнутый клинок «змеиный язык», отравленные дротики, кнут</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Пегий конь в зелёной попоне со змеиными узорами</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Фиолетовый плащ с зелёной подкладкой, вышитая змея на плече</span>`
    },
    {
        name: "ОРДЕН ЛЬВА",
        hint: "Благородные рыцари. Их символ — царь зверей, символ храбрости и королевской власти.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Золотой шлем с нашлемником в виде львиной гривы и оскаленной морды</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Позолоченные латы с рельефным изображением львиной морды на груди</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Золотой щит с рычащим львом на красном геральдическом поле</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Тяжёлый рыцарский меч «Коготь Льва», боевой топор с золотым лезвием</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Гнедой жеребец в золотой попоне с львиными головами по краям</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Красный плащ с золотой каймой, лев на спине вышит золотой нитью</span>`
    },
    {
        name: "ОРДЕН ТИГРА",
        hint: "Свирепые рыцари. Их символ — полосатый хищник, символ ярости и скорости.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Шлем с тигриной маской-нашлемником, клыки по бокам забрала</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Полосатый доспех — оранжево-чёрные латы, имитирующие тигриную шкуру</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Оранжевый щит с чёрными полосами и мордой тигра в центре</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Парные изогнутые клинки «Тигриные когти», лёгкое копьё</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Пегий конь в полосатой оранжево-чёрной попоне</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Оранжевый плащ с чёрными полосами, тигриная шкура на плечах</span>`
    },
    {
        name: "ОРДЕН СОКОЛА",
        hint: "Стремительные рыцари. Их символ — хищная птица, символ острого зрения и скорости.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Лёгкий шлем с нашлемником в виде распростёртого сокола</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Лёгкие стальные латы голубоватого оттенка для максимальной мобильности</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Лёгкий щит небесно-голубого цвета с силуэтом пикирующего сокола</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Лёгкий длинный меч, метательные копья, охотничий лук</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Быстрый гнедой скакун в голубой попоне с соколиными крыльями</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Голубой лёгкий плащ, разрывающийся на полы для удобства верховой езды</span>`
    },
    {
        name: "ОРДЕН КАБАНА",
        hint: "Неукротимые рыцари. Их символ — дикое животное с клыками, символ ярости в бою.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Массивный шлем с клыками по бокам, нашлемник в виде кабаньей головы</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Тяжёлые грубые латы коричнево-серого цвета, усиленные наплечники</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Тяжёлый деревянный щит, обитый железом, с изображением кабана</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Мощная боевая секира, тяжёлая булава «Клык», короткий меч</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Мощный тяжёлый конь в грубой кожаной попоне с железными бляхами</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Грубый коричневый плащ из звериной шкуры, клыки кабана на пряжке</span>`
    },
    {
        name: "ОРДЕН ЧЕРЕПА",
        hint: "Зловещие рыцари. Их символ — кость, оставшаяся после смерти, напоминание о бренности бытия.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Шлем в форме человеческого черепа с пустыми глазницами</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Костяно-серые латы с рёбрами на груди, имитирующие скелет</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Чёрный щит с белым черепом и скрещёнными костями</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Меч «Костолом», цеп с шипами, кинжалы из кости</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Тощий серый конь в попоне с костяными узорами</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Рваный серый плащ, украшенный маленькими черепами по подолу</span>`
    },
    {
        name: "ОРДЕН ГРИФОНА",
        hint: "Величественные рыцари. Их символ — мифическое существо с телом льва и головой орла.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Шлем с двойным нашлемником — орлиные крылья и львиные уши</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Стальные латы с бронзовыми вставками, наплечники в форме крыльев</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Щит с изображением грифона — львиное тело и орлиная голова с распростёртыми крыльями</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Тяжёлый меч «Коготь Грифона», копьё с бронзовым наконечником</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Величественный белый жеребец в бронзовой попоне с крыльями</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Бронзовый плащ с крыльями на спине, подкладка львиного цвета</span>`
    },
    {
        name: "ОРДЕН ПАНТЕРЫ",
        hint: "Грациозные рыцари. Их символ — чёрная дикая кошка, символ stealth и элегантности.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Обтекаемый чёрный шлем с ушками пантеры, узкие прорези</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Чёрные лёгкие латы с фиолетовым отливом, кожаные вставки для гибкости</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Чёрный щит с фиолетовой каймой, силуэт крадущейся пантеры</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Изогнутый клинок «Клык Пантеры», парные кинжалы, метательные ножи</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Чёрный быстрый конь в фиолетовой попоне с чёрной каймой</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Чёрно-фиолетовый плащ, мягкая ткань для бесшумного передвижения</span>`
    },
    {
        name: "ОРДЕН РОЗЫ",
        hint: "Изящные рыцари. Их символ — прекрасный цветок с шипами, символ красоты и опасности.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Элегантный шлем с нашлемником в виде красного цветка розы</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Изящные латы красно-серебристого цвета с гравировкой роз и шипов</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Серебристый щит с красной розой в центре, лепестки из эмали</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Тонкий клинок «Шип Розы», рапира с навершием-розой, кинжал</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Белый конь в красной попоне с вышитыми розами</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Красный шёлковый плащ с серебряной каймой и вышитыми розами</span>`
    },
    {
        name: "РЫЦАРИ ПЯТИ",
        hint: "Элитные рыцари. В их названии указано число — сколько элементов или добродетелей они олицетворяют.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Уникальный шлем с пятью шипами-лучами, символизирующими пять стихий</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Пентаграмма на груди — латы с пятью цветными вставками (красная, синяя, зелёная, жёлтая, белая)</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Щит с пятиконечной звездой (пентаграммой) на чёрном поле</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Меч «Пять Стихий», каждая грань клинка разного цвета</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Конь в попоне с пентаграммой и пятью цветными полосами</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Чёрный плащ с пятиконечной звездой, подкладка из пяти цветных сегментов</span>`
    },
    {
        name: "СВЯЩЕННОЕ ОПЛОЧЕНИЕ",
        hint: "Божественные защитники. Их название связано с религиозной защитой и священной миссией.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Шлем с крестом на лбу, белые перья по краям забрала</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Белоснежные латы с золотым крестом на груди, чистота и вера</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Белый щит с большим золотым крестом — символ божественной защиты</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Освящённый меч с крестом на гарде, булатная булава, святое копьё</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Белый жеребец в белоснежной попоне с золотым крестом</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Белый плащ с золотым крестом на спине, символ священной миссии</span>`
    },
    {
        name: "СНЕЖНЫЕ РЫЦАРИ",
        hint: "Северные воины. Их название связано с холодным белым покровом, покрывающим землю зимой.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Тяжёлый шлем с меховой оторочкой, ледяной узор на забрале</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Бело-голубые латы с инеевыми узорами, утеплённая подкладка из меха</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Голубой щит со снежинкой в центре, ледяная кайма</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Меч «Ледяной Ветер», топор викингов, копьё с ледяным наконечником</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Белый северный конь в голубой попоне с меховой каймой</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Белый меховой плащ, синий подклад с вышитыми снежинками</span>`
    },
    {
        name: "РЫЦАРИ КРОВИ",
        hint: "Грозные воины. Их название связано с жизненной жидкостью, проливаемой на поле боя.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Грозный шлем тёмно-красного цвета с клыкообразным забралом</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Тёмно-красные латы с кровавыми потёками, шипы на плечах и локтях</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Кроваво-красный щит с чёрной каплей в центре</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Меч «Кровавый Жнец», двуручный топор, цепь с шипами</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Тёмно-красный жеребец в чёрной попоне с красными крестами</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Тёмно-красный рваный плащ, украшенный металлическими каплями</span>`
    },
    {
        name: "ОРДЕН СТАЛИ",
        hint: "Непреклонные воины. Их название — это сплав железа и углерода, основа всех доспехов.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Массивный стальной шлем без украшений — чистый функциональный дизайн</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Полностью стальные латы максимальной толщины, без покраски — голый металл</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Стальной щит без герба — только отполированная сталь, слепящая врагов</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Стальной меч «Нерушимый», боевой молот, тяжёлое копьё</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Конь в полной стальной броне — полная защита всадника и скакуна</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Серый практичный плащ без украшений — только сталь, ничего лишнего</span>`
    },
    {
        name: "ОРДЕН ВОЛКА",
        hint: "Дикие рыцари. Их символ — стайный хищник, символ верности братству и свирепости.",
        description: `<span class="equip-category">Шлем:</span> <span class="equip-item">Шлем с волчьей головой-нашлемником, оскал и клыки по бокам</span><br>
        <span class="equip-category">Доспех:</span> <span class="equip-item">Серо-коричневые латы с меховой подкладкой, шипы на плечах</span><br>
        <span class="equip-category">Щит:</span> <span class="equip-item">Щит с волчьей мордой на тёмно-сером фоне, вожжа по краю</span><br>
        <span class="equip-category">Оружие:</span> <span class="equip-item">Меч «Волчий Клык», боевой топор, кинжалы в сапогах</span><br>
        <span class="equip-category">Конь:</span> <span class="equip-item">Серый конь в попоне с волчьими головами по краю</span><br>
        <span class="equip-category">Плащ:</span> <span class="equip-item">Серый волчий плащ из настоящей волчьей шкуры, клыки на застёжке</span>`
    }
];

// ========================
// ИГРОВАЯ ЛОГИКА
// ========================
let currentOrder = null;
let guessedLetters = new Set();
let wrongGuesses = 0;
const MAX_WRONG = 6;
let score = 0;
let streak = 0;
let round = 1;
let gameOver = false;
let usedOrders = new Set();
let hintUsed = false;

const alphabet = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

// DOM-элементы
const wordDisplay = document.getElementById('wordDisplay');
const descriptionEl = document.getElementById('description');
const keyboard = document.getElementById('keyboard');
const letterInput = document.getElementById('letterInput');
const livesEl = document.getElementById('lives');
const progressFill = document.getElementById('progressFill');
const guessedLettersEl = document.getElementById('guessedLetters');
const resultOverlay = document.getElementById('resultOverlay');
const resultTitle = document.getElementById('resultTitle');
const resultName = document.getElementById('resultName');
const resultDesc = document.getElementById('resultDesc');
const hintText = document.getElementById('hintText');

// ========================
// ФУНКЦИИ
// ========================

function createKeyboard() {
    keyboard.innerHTML = '';
    alphabet.split('').forEach(letter => {
        const key = document.createElement('button');
        key.className = 'key';
        key.textContent = letter;
        key.dataset.letter = letter;
        key.addEventListener('click', () => guessLetter(letter));
        keyboard.appendChild(key);
    });
}

function getRandomOrder() {
    if (usedOrders.size >= orders.length) {
        usedOrders.clear();
    }
    let idx;
    do {
        idx = Math.floor(Math.random() * orders.length);
    } while (usedOrders.has(idx));
    usedOrders.add(idx);
    return orders[idx];
}

function startNewRound() {
    currentOrder = getRandomOrder();
    guessedLetters.clear();
    wrongGuesses = 0;
    gameOver = false;
    hintUsed = false;

    descriptionEl.innerHTML = currentOrder.description;
    hintText.textContent = currentOrder.hint;
    hintText.classList.remove('visible');

    renderWord();
    renderLives();
    renderGuessedLetters();
    updateProgress();
    resetKeyboard();
    letterInput.value = '';
    letterInput.focus();

    document.getElementById('round').textContent = round;
}

function renderWord() {
    wordDisplay.innerHTML = '';
    const name = currentOrder.name;

    for (let i = 0; i < name.length; i++) {
        const box = document.createElement('div');
        box.className = 'letter-box';
        const ch = name[i];

        if (ch === ' ') {
            box.classList.add('space');
        } else if (guessedLetters.has(ch)) {
            box.classList.add('revealed');
            box.textContent = ch;
        } else {
            box.classList.add('hidden');
        }
        wordDisplay.appendChild(box);
    }
}

function renderLives() {
    livesEl.innerHTML = '';
    for (let i = 0; i < MAX_WRONG; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart' + (i < wrongGuesses ? ' lost' : '');
        heart.textContent = '❤️';
        livesEl.appendChild(heart);
    }
}

function renderGuessedLetters() {
    guessedLettersEl.innerHTML = '';
    const allLetters = new Set(currentOrder.name.replace(/ /g, '').split(''));

    allLetters.forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        if (guessedLetters.has(letter)) {
            // correct
        } else {
            span.classList.add('missed');
        }
        guessedLettersEl.appendChild(span);
    });
}

function updateProgress() {
    const name = currentOrder.name;
    const allLetters = name.replace(/ /g, '').split('');
    const uniqueLetters = [...new Set(allLetters)];
    const revealed = uniqueLetters.filter(l => guessedLetters.has(l)).length;
    const percent = (revealed / uniqueLetters.length) * 100;
    progressFill.style.width = percent + '%';
}

function resetKeyboard() {
    document.querySelectorAll('.key').forEach(key => {
        key.disabled = false;
        key.classList.remove('correct', 'wrong');
    });
}

function guessLetter(letter) {
    if (gameOver) return;
    letter = letter.toUpperCase();

    if (guessedLetters.has(letter)) return;

    guessedLetters.add(letter);

    const name = currentOrder.name;
    const isCorrect = name.includes(letter);

    const key = document.querySelector(`.key[data-letter="${letter}"]`);
    if (key) {
        key.disabled = true;
        key.classList.add(isCorrect ? 'correct' : 'wrong');
    }

    if (!isCorrect) {
        wrongGuesses++;
        renderLives();
    }

    renderWord();
    updateProgress();
    renderGuessedLetters();

    // Проверка победы
    const allLetters = name.replace(/ /g, '').split('');
    const uniqueLetters = [...new Set(allLetters)];
    const allGuessed = uniqueLetters.every(l => guessedLetters.has(l));

    if (allGuessed) {
        endGame(true);
    } else if (wrongGuesses >= MAX_WRONG) {
        endGame(false);
    }
}

function endGame(won) {
    gameOver = true;

    if (won) {
        score++;
        streak++;
        resultTitle.textContent = '🏆 ПОБЕДА!';
        resultTitle.className = 'win';
        resultName.textContent = currentOrder.name;
        resultDesc.textContent = 'Вы угадали орден по описанию снаряжения!';
    } else {
        streak = 0;
        resultTitle.textContent = '💀 ПОРАЖЕНИЕ';
        resultTitle.className = 'lose';
        resultName.textContent = currentOrder.name;
        resultDesc.textContent = 'Не хватило жизней. Запомните этот орден!';
        // Показать все буквы
        const allLetters = currentOrder.name.replace(/ /g, '').split('');
        allLetters.forEach(l => guessedLetters.add(l));
        renderWord();
        updateProgress();
    }

    document.getElementById('score').textContent = score;
    document.getElementById('streak').textContent = streak;

    resultOverlay.classList.add('visible');
}

// ========================
// ОБРАБОТЧИКИ СОБЫТИЙ
// ========================

document.getElementById('guessBtn').addEventListener('click', () => {
    const letter = letterInput.value.trim().toUpperCase();
    if (letter && alphabet.includes(letter)) {
        guessLetter(letter);
        letterInput.value = '';
        letterInput.focus();
    }
});

letterInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const letter = letterInput.value.trim().toUpperCase();
        if (letter && alphabet.includes(letter)) {
            guessLetter(letter);
            letterInput.value = '';
        }
    }
});

document.getElementById('guessWordBtn').addEventListener('click', () => {
    if (gameOver) return;
    const guess = prompt('Введите название ордена полностью:');
    if (!guess) return;

    if (guess.trim().toUpperCase() === currentOrder.name) {
        const allLetters = currentOrder.name.replace(/ /g, '').split('');
        allLetters.forEach(l => guessedLetters.add(l));
        renderWord();
        updateProgress();
        endGame(true);
    } else {
        wrongGuesses++;
        renderLives();
        if (wrongGuesses >= MAX_WRONG) {
            endGame(false);
        } else {
            alert('❌ Неверно! Вы потеряли одну жизнь. Попробуйте угадать буквы.');
        }
    }
});

document.getElementById('hintBtn').addEventListener('click', () => {
    if (gameOver || hintUsed) return;
    hintUsed = true;
    wrongGuesses++;
    renderLives();
    hintText.classList.add('visible');
    document.getElementById('hintBtn').disabled = true;
    document.getElementById('hintBtn').textContent = '💡 Подсказка использована';

    if (wrongGuesses >= MAX_WRONG) {
        endGame(false);
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    resultOverlay.classList.remove('visible');
    round++;
    document.getElementById('hintBtn').disabled = false;
    document.getElementById('hintBtn').textContent = '💡 Подсказка (−1 жизнь)';
    startNewRound();
});

// Глобальная клавиатура — нажатие букв
document.addEventListener('keydown', (e) => {
    if (gameOver) return;
    const letter = e.key.toUpperCase();
    if (alphabet.includes(letter) && document.activeElement !== letterInput) {
        guessLetter(letter);
    }
});

// ========================
// ЗАПУСК
// ========================
createKeyboard();
startNewRound();