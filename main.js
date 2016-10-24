// Angular Modules for Hearthstone application API

angular.module('HearthstoneApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when("/hero/:heroClass", {
                templateUrl: "./html/hero.html",
            })
            .when('/', {
                templateUrl: './html/home.html'
            })
    });

angular.module('HearthstoneApp')
    .controller('CardController', deckController)

deckController.$inject = ['$http', '$timeout', '$routeParams'];

function deckController($http, $timeout, $routeParams) {
    var deckCtrl = this;
    deckCtrl.greeting = 'You fell into my trap card';
    console.log("Class: ", $routeParams);

    deckCtrl.initPopovers = function() {
        console.debug('Popovers');
        $timeout(function() {
            console.debug("Popovers running!", $('[data-toggle="popover"]'));
            $('[data-toggle="popover"]').popover();
        }, 0);
    };

    deckCtrl.grabCards = function(charClass) {
        deckCtrl.charClass = charClass;

        if (charClass === "Warrior") {
            deckCtrl.classBackground = "./images/garrosh.png";
            deckCtrl.heroPower = "./hero-powers/warrior.png";
            deckCtrl.classDesc = "Garrosh Hellscream is the current Warchief of the Horde, chosen by Thrall to succeed him in the wake of the Shattering.\
             Garrosh grew up on Draenor in the shadow of his father, the great warrior Grommash Hellscream. \
             Chieftain of the Warsong clan, Grom was the first orc leader to drink the blood of Mannoroth, subjugating the orcs to the Legion’s will.\
             Before this event, Garrosh was among several orcs who had become ill with the red pox.\
             They had been quarantined far away in Nagrand, allowing them to escape the demonic corruption.\
             The younger Hellscream was ashamed of his father for many years until he met Thralland learned of Grom’s heroic redemption.\
             Garrosh has since embraced his potential as a strong leader, most notably in Northrend, \
             where he directed the Horde advance through the Borean Tundra and won the hearts of his people.\
             Uncompromising and fiercely proud, Garrosh intends to restore the orcs’ glory by any means necessary.\
             While presiding over the renewed war against the Alliance, Garrosh's increasingly brutal reign has evoked direly strained relations within the Horde itself.\
             Garrosh's ultimate fate will be explored as the war on Pandaria reaches its climax, where he will find himself dealing with both his hated enemy and an uprising within his own ranks.";
        } else if (charClass === "Shaman") {
            deckCtrl.classBackground = "./images/thrall.png";
            deckCtrl.heroPower = "./hero-powers/shaman.png";
            deckCtrl.classDesc = "Thrall (birthname Go'el), son of Durotan, is the former Warchief of the restored shamanistic Horde,\
            and founder of the red land of Durotar in Kalimdor. After the fall of the Lich King and the increasing elemental unrest\
            heralding the Shattering, Thrall stepped down as leader of the Horde, appointed Garrosh Hellscream as Warchief, and joined\
            with the Earthen Ring to combat the rampaging elements.With his victory over the corrupted aspect behind him, Thrall has been\
            forced to deal with the chaos his replacement has sewn in his wake. Garrosh, whose reinvigorated war has fundamentally changed\
            the Horde Thrall had once envisioned, stands on the brink of burgeoning rebellion from within his own ranks, and Thrall steps back\
            in to defend the Horde and its allies from their increasingly ruthless dictator. Together with Vol'jin and other disenfranchised\
            leaders of the Horde, Thrall plans to overthrow his ill-fated successor."
        } else if (charClass === "Rogue") {
            deckCtrl.classBackground = "./images/valeera.png";
            deckCtrl.heroPower = "./hero-powers/rogue.png";
            deckCtrl.classDesc = "Valeera Sanguinar, along with Broll Bearmantle, was a companion of Varian Wrynn."
        } else if (charClass === "Paladin") {
            deckCtrl.classBackground = "./images/uther.png";
            deckCtrl.heroPower = "./hero-powers/paladin.png";
            deckCtrl.classDesc = "Lord Uther the Lightbringer, or Sire Uther Lightbringer, was the first paladin of the Knights of the \
            Silver Hand who led his Order in battle against the Horde during the Second War. During the Third War, Uther was betrayed \
            and murdered by his beloved pupil, Prince Arthas, while defending the urn carrying the ashes of Arthas' father, King Terenas"
        } else if (charClass === "Hunter") {
            deckCtrl.classBackground = "./images/rexxar.png";
            deckCtrl.heroPower = "./hero-powers/hunter.png";
            deckCtrl.classDesc = "Rexxar, Champion of the Horde, is a half-ogre, half-orc beastmaster of the Mok'Nathal clan, and may be\
            one of the last half-ogres of the clan. He saved the city of Orgrimmar from the hatred of an enemy of the Horde.\
            He was instrumental in assisting theHorde after the fall of the Burning Legion. Due to his mixed lineage, he is a\
            towering and massively muscled warrior, and he wields his two huge axes with tremendous skill and ferocity. \
            Rexxar is always seen with his loyal bear companion Misha.Prior to World of Warcraft: The Burning Crusade, the\
            warrior wandered a path from the Charred Vale in Stonetalon Mountains along the main road through Desolace and\
            continued to the Twin Colossals in northern Feralas. Currently, he can be found inThunderlord Stronghold in the\
            Blade's Edge Mountains of Outland, protecting the settlement against ogres and gronn while trying to find more of his people."
        } else if (charClass === "Druid") {
            deckCtrl.classBackground = "./images/malfurion.png";
            deckCtrl.heroPower = "./hero-powers/druid.png";
            deckCtrl.classDesc = "Malfurion Stormrage was the first of the mortal druids on Azeroth, and the night elf who initiated\
            the mainstream use of druidism among the kaldorei people ten millenia ago under tutelage of the demigod Cenarius.\
            Through Malfurion's guidance, the night elves successfully halted the Burning Legion's first invasion of Azeroth during\
            the legendary War of the Ancients. In its aftermath, he became the greatest of the world's archdruids. Malfurion Stormrage\
            is the twin brother of Illidan Stormrage, as well as the loving and beloved husband of the high priestess of Elune, Tyrande\
            Whisperwind. Together, the two have represented the highest leadership of the night elves ever since the fall of Queen Azshara\
            and her Highborne caste. Malfurion is often referred to as Shan'do, which means 'honored teacher' in Darnassian. Connected\
            deeply to the ebbs and flows of life on Azeroth and bearing ages of responsibility and wisdom, Malfurion is one of the\
            mightiest and venerated mortals of theWarcraft universe."
        } else if (charClass === "Warlock") {
            deckCtrl.classBackground = "./images/guldan.png";
            deckCtrl.heroPower = "./hero-powers/warlock.png";
            deckCtrl.classDesc = "Gul'dan was a former orc shaman from Draenor who became the first orcish warlock as well as the de facto founder of the Orcish Horde. Abandoning the ways of shamanism and betraying both his people and his mentor to the demonlord Kil'jaeden for personal gain and power, Gul'dan was directly responsible for the orcs' fall to demonic enslavement as well as for the Horde's invasion of Azeroth. Tutored by the lord of the Burning Legion, he became the founder and master of the Shadow Council as well as the original creator of the necromantic terrors known as death knights. Gul'dan is considered by many to have been the most cunning and powerful mortal warlock to ever have existed. He often referred to himself as 'Darkness Incarnate' and 'The Destroyer of Dreams'."
        } else if (charClass === "Mage") {
            deckCtrl.classBackground = "./images/jaina.png";
            deckCtrl.heroPower = "./hero-powers/mage.png";
            deckCtrl.classDesc = "Lady Jaina Proudmoore is the leader of the Kirin Tor and ruler of Dalaran. She is the daughter of Grand\
            Admiral Daelin Proudmoore and sister of Derek Proudmoore. As such she is Princess of the Kingdom of Kul Tiras, although she never\
            uses the title. Jaina was one of the most trusted sorceresses of Dalaran, trained as the personal agent of the Archmage Antonidas,\
            leader of the Kirin Tor. Early in the Third War, Antonidas dispatched Jaina to discover what was happening in the northlands of\
            Lordaeron. She was escorted by her childhood friend and one-time romantic interest, Prince Arthas Menethil, to uncover if the plague\
            had magical origins. Jaina saw the fall of Lordaeron firsthand and — guided by a mysterious prophet — rallied what survivors she could\
            and fled across the sea to Kalimdor. Jaina swore to defeat the Burning Legion and its sinister agents any way she could. Joining forces\
            with the night elves and even the orcish Horde, Jaina helped defeat the demon Archimonde and banish the Legion. She then gathered the human\
            survivors in Kalimdor and founded the port city of Theramore Isle, where she ruled over the tattered remnants of the Alliance and hoped to\
            reunite the distant human kingdoms once more. Shortly after the fall of Deathwing, the Horde, under orders from Warchief Garrosh Hellscream,\
            unleashed a devastating attack against Theramore, destroying the city. Jaina managed to escape with her life, but the experience transformed\
            her, making her more bellicose and even altering her appearance. Following the death of Rhonin during the attack, and fulfilling a prophecy\
            made by the dragon-mage Korialstrasz, Jaina took the fallen mage's place as leader of the Kirin Tor."
        } else if (charClass === "Priest") {
            deckCtrl.classBackground = "./images/anduin.png";
            deckCtrl.heroPower = "./hero-powers/priest.png";
            deckCtrl.classDesc = "Crown Prince Anduin Llane Wrynn is the heir to the throne of Stormwind. He is named after two venerated figures of\
            Stormwind history: the legendary Anduin Lothar and his grandfather King Llane."
        }

        console.log("Class chosen: ", charClass);
        $http({
            method: 'GET',
            url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/' + charClass + '?maxResult=20',
            dataType: 'json',
            headers: {
                'X-Mashape-Authorization': 'Abo32BbDXemshGzTJKDRwOUZXW1tp1ah6CQjsn918PdhKRYRIB'

            }
        }).then(function(res, status) {
            console.log('Success:', res.data);
            deckCtrl.getCards = res.data;
        }, function(err) {
            console.log('Error:', err);
        });
        window.location.href = '#/hero/' + charClass;
    }

    if (location.hash.split('/')[1] === 'hero') {
        deckCtrl.grabCards(location.hash.split('/')[2]);
    }

    // ===== Scroll to Top ====

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200); // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });

    // Pagination area for Card Data

    // deckCtrl.getCards = function(pageNum) {
    //     // update the deckCtrl.getCards array to contain the slice corresponding to the page number
    //     // ex: page 1 is elements 0 through 10
    //     // page 2 is elements 10 through 20...
    //
    //     deckCtrl.getCards = deckCtrl.getCards.matches.slice(10 * (pageNum - 1), 10 * (pageNum - 1) + 10);
    //
    //     console.log(deckCtrl.getCardsData;
    // }

}
