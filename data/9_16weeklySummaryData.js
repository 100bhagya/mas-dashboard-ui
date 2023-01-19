const weeklySummaryData = [];

const add = (
  articleTopic,
  articleText,
  category,
  weekNumber,
  articleNumber
) => {
  weeklySummaryData.push({
    articleTopic,
    articleText,
    author: "Ajay Sharma",
    category,
    readTime: 8,
    weekNumber,
    articleNumber,
    deleted: false,
  });
};

add(
  "American Football",
  "The equipment is the first major difference between American football and soccer. In American football, the players need to wear protective clothing because it can be a dangerous game to play. The players need to wear helmets to protect their head, mouth guards for their teeth, and large pads for their shoulders and back. The players use a brown ball that is pointed on the ends. On the other hand, soccer players do not need to wear helmets and lots of protective pads. The players just have pads to protect their shins, and the goalie wears gloves. The ball they use in soccer is round. The ball is usually a bright color like white. Soccer and American football definitely require different equipment to play them. ",
  "Sports",
  9,
  1
);

add(
  "Physical Excercise",
  "Exercise is important because it improves your mental health. First, exercise is the healthiest way to deal with stress. When we have too much stress, our mental and emotional health is affected negatively. Exercise can reduce this impact. Exercise can also influence the balance of chemicals we have inside our bodies. Exercise releases endorphins into our bodies and that can help us feel better or not be depressed. These emotional benefits are very helpful. Exercise also helps us think more clearly because it brings more oxygen to the brain. If you watch how you feel when you exercise, you will notice that your mood and mental clarity improve. ",
  "Fitness",
  9,
  2
);

add(
  "Marriage",
  "Getting married in the United States often involves many different types of parties. Some couples have an engagement party, which is for family and friends to express congratulations to the couple after they get engaged. The bride typically is invited to a bridal shower, which is a party for all of her friends (usually only female friends) to celebrate the upcoming wedding with her. After the wedding ceremony, there is usually a wedding reception, which is another large party. The wedding reception includes many traditional activities, like cutting the cake and throwing the bouquet. All of these different parties are part of many American weddings.",
  "Life",
  10,
  1
);
add(
  "Serving others",
  "Serving others can help make people happier in any situation. When people are feeling stressed or unhappy, it is often because they are focused on their problems and worries. Focusing on our own problems and worries makes us feel more stressed about them. When we focus on helping other people with their problems, we feel happier because we are not focused on ourselves. Helping others also helps in the other areas of building happiness: it strengthens our relationships with others and it helps us feel more gratitude. When we serve others, we can become good friends with the people we help because they see how much we care about them. We feel more gratitude because we see the problems other people face and we realize that we are not the only ones who struggle with certain problems. Serving others is an essential key to living a happier life.",
  "Conscience",
  10,
  2
);
add(
  "Online Classes",
  "Online classes, on the other hand, do not offer face-to-face interaction and they are more limited in their instruction methods, yet they offer greater flexibility for scheduling. The interaction between teachers and students in an online class is typically time-delayed, meaning that students send an email and wait for a response. Interaction with classmates is less personal than it would be in a traditional class because when student-to-student interaction is required, it is typically limited to email or an online discussion board. The method of instruction in online classes is typically limited to videos and reading articles that can be sent to students electronically. Many of the hands-on experiences that students get in a traditional class are virtually impossible to have in an online class. Rather than being able to touch and feel rocks in the geology class, students will be limited to videos or pictures of rocks. The scheduling is very flexible. Students typically enroll in online classes because they need the ability to take classes at night, early in the morning, or even during their lunch break at work. The pace of online classes is typically determined by the students, so their personal and work schedules do not need to be completely changed. While the interaction and instruction may be limitations of an online class, the scheduling is very flexible.",
  "Education",
  11,
  1
);

add(
  "The World of Islam",
  "For nearly 1,400 years Islam, though diverse in sectarian practice and ethnic tradition, has provided a unifying faith for peoples stretching from the Atlantic to the Indian Ocean and beyond. Starting in the 1500s, Western ascendancy, which culminated in colonization, eroded once glorious Muslim empires and reduced the influence of Islam. After the breakup of the Ottoman Empire following World War I and the decline of European colonial empires following World War II, Muslim nations adopted Western ideologies–communism, socialism, secular nationalism, and capitalism. Yet most Muslims remained poor and powerless. Their governments, secular regimes often backed by the West, were corrupt and repressive",
  "Religion",
  11,
  2
);

add(
  "Politics: Who Gets What, When, How",
  "In 1925 the land aristocracy of Germany owned most of the large estates which occupied 20.2 per cent of the arable land of the country. They had 40 per cent of the land east of the Elbe River. All told, these large estates constituted but 0.4 per cent of the total number of landholdings in Germany. At the base of the pyramid were those who occupied small holdings: 59.4 per cent of the total holdings of Germany accounted for only 6.2 per cent of the arable land” (Lasswell 17).",
  "Politics",
  12,
  1
);
add(
  "The Ascent of Man",
  "The Indian tribes of North and South America do not contain all the blood groups that are found in populations elsewhere. A fascinating glimpse into their ancestry is opened by this unexpected biological quirk. For the blood groups are inherited in such a way that, over a whole population, they provide some genetic record of the past. The total absence of blood group A from a population implies, with virtual certainty, that there was no blood group A in its ancestry; and similarly with blood group B. And this is in fact the state of affairs in America",
  "Homosapnienes",
  12,
  2
);

add(
  "Technical Communition",
  "A solenoid is an electrically energized coil that forms an electromagnet capable of performing mechanical functions. The term ‘solenoid’ is derived from the word ‘sole’ which in reference to electrical equipment means ‘a part of,’ or ‘contained inside, or with, other electrical equipment.’ The Greek word solenoides means ‘Channel,’ or ‘shaped like a pipe.’ A simple plunger-type solenoid consists of a coil of wire attached to an electrical source, and an iron rod, or plunger, that passes in and out of the coil along the axis of the spiral. A return spring holds the rod outside the coil when the current is deenergized, as shown in figure 1",
  "Technology",
  13,
  1
);
add(
  "Dark Galaxies",
  `We see stars all around, so why doesn’t their combined light add up to make our night sky–and surrounding space, for that matter–bright? German physicist Heinrich Wilhelm Olbers put the same puzzle this way in 1823: If the universe is infinite in size, and stars (or galaxies) are distributed throughout this infinite universe, then we are certain to eventually see a star in any direction we look. As a result, the night sky should be aglow. Why isn’t it?

In fact, the answer is far more profound than it appears. There have been many attempts at explaining this puzzle, dubbed Olbers’ Paradox, over the years. One version implicated dust between stars and perhaps between galaxies. The idea was that the dust would block the light from faraway objects, making the sky dark. In reality, however, the light falling on the dust would eventually heat it up so that it would glow as brightly as the original sources of the light.

Another proposed answer for the paradox held that the tremendous red shift of distant galaxies–the lengthening of the wavelength of light they emit due to the expansion of the universe–would move light out of the visible range into the invisible infrared. But if this explanation were true, shorter, wavelength ultraviolet light would also be shifted into the visible range–which doesn’t happen.`,
  "Space",
  13,
  2
);

add(
  "Upper Palaeolithic people",
  `The ways of life of Upper Palaeolithic people are known through the remains of meals scattered around their hearths, together with many tools and weapons and the debris left over from their making. The people were hunter-gatherers who lived exclusively from what they could ﬁnd in nature without practising either agriculture or herding. They hunted the bigger herbivores, while berries, leaves, roots, wild fruit and mushrooms probably played a major role in their diet. Their hunting was indiscriminate, perhaps because so many animals were about that they did not need to spare pregnant females or the young. In the cave of Enlene, for example, many bones of reindeer and bison foetuses were found. Apparently, upper Palaeolithic people hunted like other predators and killed the weakest prey ﬁrst. They did, however, sometimes concentrate on salmon runs and migrating herds of reindeer. Contrary to popular beliefs about ‘cave men’, Upper Palaeolithic people did not live deep inside caves. They rather chose the foot of cliffs, especially when an overhang provided good shelter. On the plains and in the valleys, they used tents made from hides of the animals they killed. At times, on the great Russian plains, they built huts with huge bones and tusks collected from the skeletons of mammoths.

Men hunted mostly with spears; the bow and arrow was probably not invented until the Magdalenian period that came at the end of the Upper Palaeolithic. Tools and weapons, made out of wood or reindeer antlers, often had ﬂint cutting edges. Flint snappers were skilful and traditions in ﬂint snapping were pursued for thousands of years. This continuity means that they must have been carefully taught how to ﬁnd good ﬂint nodules and how to knap them in order to make knives, burins (chisel-like tools) or scrapers, which could be used for various purposes.

Beginning in 1899, the brothers designed and built a series of gliders to test their various ideas on a flying machine. They constructed a wind tunnel that allowed them to test designs without having to build a full-size model. They even built their own gasoline-powered motor for their aircraft.`,
  14,
  1
);
add(
  "Marriages",
  `As today's bride and groom celebrate their wedding, they have every excuse for being
nervous. They exchange promises of lifelong fidelity and mutual support. However, all
around them, they can see that many people do not and cannot keep these promises.
Their own marriage has a one in three chance of divorce, if present tendencies
continue.
Traditional marriage is facing a crisis, at least in Britain. Not only are there more and
more divorces, but the number of marriages is falling. Living together is more
popular than before. The family is now no longer one man, one woman and their
children. Instead, there are more and more families which include parents, half sisters
and brothers, or even only one parent on her / his own.
Although Britain is still conservative in its attitudes to marriage compared with other
countries such as the USA, Sweden and Denmark, the future will probably see many
more people living together before marriage - and more divorce. Interestingly, it is
women rather than men who apply for divorce. Seven out of ten divorces are given
to the wife. Also, one of the main reasons for divorce, chosen by ten times more
women than men, is unreasonable or cruel behaviour. Perhaps this means that women
will tolerate less than they used to. `,
  "Humanity",
  14,
  2
);

add(
  "Don't Waste Fodd",
  `Until the early 1900s, few guidelines for the training of children had been supplied by scientific studies. Parents and teachers, therefore, had to rely upon traditional beliefs or used their own best judgment.

Under such conditions, old wives’ tales were found very important and useful. They served as guidelines for behaviour and gave parents and teachers confidence that they were playing their roles satisfactorily. ‘Spare the rod and spoil the child’ was – and in some families still is – a guideline for family discipline. It made corporal punishment a parental responsibility. However unpleasant the parent’s duty might be to him, he at least, felt saved from social criticism if his child misbehaved, and he had no doubt that only a slap or a beating for misbehaviour would teach the child what was right and what he must do.

Many of the old wives’ tales rooted in folklore, were supported by scientists and accepted by social custom. Thus parents and teachers can hardly be blamed for sticking to old child training methods, nor can they be accused of being rigid if they are reluctant to experiment with the latest educational theory.`,
  "Life",
  15,
  1
);
add(
  "Car Safety",
  `Australian scientists warned drivers and passengers of new cars that danger lurks within their brand new vehicles. It is not the soft fabric or leather that encases comfortable bucket seats, or the shining new dashboard, or the designs of the sporty steering wheel that harbor the danger. It is the reassuring smell of the new car that spells danger. The odor actually contains high levels of toxic air emissions that can make the driver and passengers ill.

A research organization in Australia conducted a comprehensive research on three cars. Drivers were asked to keep logs on how they felt and reacted to the lush interiors of their cars. The researchers also carried out observations on the reactions of the drivers and at the same time interviewed them.

Anecdotal evidence was therefore carefully gathered and analyzed. The results revealed that the very smell of a new car that enthralls the new owner, contains high levels of toxic emissions. What is even more alarming is the fact that these toxic emissions are present in cars even after 6 months or longer of leaving the showroom. Anecdotal evidence during the study revealed that drivers were becoming ill when they drove their new cars. A lawyer reported being ill with headaches, lung irritation, and swellings for several days after collecting a new car and driving it for only 10 minutes.`,
  "Technology",
  15,
  2
);

add(
  `Need Of Having More
Women In The Police Force`,
  "Women empowerment and participation has seen a radical improvement in the recent few decades. Women are no longer confined to their homes and have come forward to excel in almost all fields, at par with men. But it has been observed that the number of women in the police force seems insufficient especially when we compare their increasing number in terrorist activities. Women are sure to prove their worth in the police force as they are more committed to the cause they work for and less corrupt, two qualities that are lacking in policemen. The government needs to increase the reserved quota for recruitment of women in the police force. Women need to be given incentives to join the police force and this is sure to prove favourable as they bring with them a distinctly different and valuable set of skills that is bound to change the way the police is perceived in our community. As the job description of the police expands beyond crime-fighting into community service the presence of more women in the police force is sure to help to burnish the tarnished image of the police officers, improve community relations and foster a more flexible and less violent approach to maintaining law and order.",
  "Humanity",
  16,
  1
);

add(
  `Education Of The Girl
Child In The Country

`,
  `Education of girls has been a high priority with the Government of India. In the new millennium, India has consolidated its earlier educational reforms with increased resources and stronger policy commitments for achieving elementary education, particularly for girls. Reaching out to the girl child is primary to the efforts to universalise elementary education. ‘Sarva Shiksha Abhiyan’ or ‘Education For All’ programme recognizes that ensuring the education of the girl child requires changes not only in the education system but also in society’s norms and attitudes.

A two-pronged gender strategy has hence been adopted to make the educational system responsive to the needs of the girls through targeted interventions which serve as a pull-factor to enhance access and retention of girls in schools on the one hand and generate community demand for girls’ education through training and mobilisation on the other hand. The CBSE has also come up with the novel scheme of providing free education from the sixth standard onwards to the single girl child. The need of the times is that the government should further improve the educational infrastructure and make it more accessible and meaningful for the girl child.`,
  "Education",
  16,
  2
);
console.log(JSON.stringify(weeklySummaryData));
