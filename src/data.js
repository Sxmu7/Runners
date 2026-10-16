export const SPORTS=[['Gym','🏋️'],['Fußball','⚽'],['Laufen','🏃'],['Radfahren','🚴'],['Schwimmen','🏊'],['Tennis','🎾'],['Basketball','🏀'],['Volleyball','🏐'],['Boxen','🥊'],['Kampfsport','🥋'],['Yoga','🧘'],['Pilates','🤸'],['Wandern','🥾'],['Badminton','🏸'],['Handball','🤾'],['Rudern','🚣'],['HIIT','🔥'],['Tanzen','💃'],['Golf','⛳'],['Sonstige','⭐']];
const RAW=[
['Sesam Chicken Rice','🍗',620,48,70,15,20,'Lunch','Hähnchenbrust:180:g|Reis:80:g|Brokkoli:150:g|Sesam:10:g'],
['Honey Mustard Chicken','🍛',550,51,53,14,25,'Dinner','Hähnchenbrust:200:g|Reis:70:g|Senf:20:g|Honig:10:g'],
['Tuna Protein Pasta','🍝',610,52,67,14,18,'Lunch','Thunfisch:150:g|Vollkornnudeln:90:g|Passata:150:g|Spinat:80:g'],
['Skyr Pancakes','🥞',420,36,45,10,15,'Breakfast','Skyr:200:g|Haferflocken:60:g|Eier:2:Stk|Banane:1:Stk'],
['Burger Protein Bowl','🥗',490,44,20,27,20,'Dinner','Rinderhack:170:g|Salat:100:g|Tomaten:120:g|Joghurt:50:g'],
['Cashew Chicken','🥘',585,45,59,18,25,'Dinner','Hähnchenbrust:170:g|Cashews:25:g|Paprika:150:g|Reis:75:g'],
['Turkey Chili','🌶️',540,49,51,14,30,'Dinner','Putenhack:180:g|Kidneybohnen:130:g|Tomaten:180:g|Mais:70:g'],
['Salmon Rice Bowl','🐟',650,43,66,23,25,'Dinner','Lachs:180:g|Reis:80:g|Gurke:100:g|Edamame:90:g'],
['Egg Breakfast Wrap','🌯',430,35,39,15,12,'Breakfast','Eier:2:Stk|Tortilla:1:Stk|Putenbrustaufschnitt:80:g|Spinat:40:g'],
['Beef Teriyaki Noodles','🍜',670,48,81,18,25,'Dinner','Rinderstreifen:180:g|Mie-Nudeln:100:g|Brokkoli:120:g|Teriyakisauce:30:g'],
['Greek Chicken Pita','🥙',510,46,49,14,20,'Lunch','Hähnchenbrust:170:g|Pita:1:Stk|Joghurt:80:g|Gurke:100:g'],
['Protein Overnight Oats','🥣',460,38,55,10,5,'Breakfast','Haferflocken:65:g|Skyr:200:g|Milch:100:ml|Beeren:100:g'],
['Shrimp Quinoa Bowl','🍤',530,47,56,12,22,'Lunch','Garnelen:200:g|Quinoa:80:g|Zucchini:130:g|Olivenöl:10:ml'],
['Chicken Fajita Bowl','🫑',580,50,62,15,25,'Dinner','Hähnchenbrust:180:g|Reis:75:g|Paprika:150:g|Mais:80:g'],
['Cottage Cheese Toast','🍞',390,34,39,11,8,'Breakfast','Hüttenkäse:200:g|Vollkornbrot:2:Scheiben|Tomaten:100:g'],
['Tofu Edamame Stir-Fry','🥦',520,38,49,20,22,'Vegan','Tofu:200:g|Edamame:140:g|Brokkoli:150:g|Reis:60:g'],
['Protein French Toast','🍞',440,35,51,12,15,'Breakfast','Toast:3:Scheiben|Eier:2:Stk|Milch:100:ml|Skyr:120:g'],
['Chicken Pesto Pasta','🍝',660,53,69,20,25,'Dinner','Hähnchenbrust:180:g|Pasta:90:g|Pesto:25:g|Tomaten:100:g'],
['Tuna Avocado Wrap','🥑',510,42,43,20,10,'Lunch','Thunfisch:150:g|Tortilla:1:Stk|Avocado:70:g|Salat:70:g'],
['Turkey Meatballs','🍝',570,48,57,16,30,'Dinner','Putenhack:180:g|Pasta:75:g|Passata:150:g|Parmesan:15:g'],
['Yogurt Berry Bowl','🫐',370,32,45,7,5,'Breakfast','Skyr:250:g|Beeren:130:g|Haferflocken:40:g|Mandeln:15:g'],
['Steak Potato Bowl','🥩',640,49,61,22,30,'Dinner','Rindersteak:190:g|Kartoffeln:280:g|Bohnen:140:g|Olivenöl:10:ml'],
['Protein Smoothie','🥤',350,35,42,7,5,'Snack','Milch:250:ml|Banane:1:Stk|Proteinpulver:30:g|Haferflocken:25:g'],
['Chicken Couscous Salad','🥗',520,46,54,14,20,'Lunch','Hähnchenbrust:170:g|Couscous:75:g|Gurke:100:g|Feta:40:g']
];
export const RECIPES=RAW.map((r,i)=>({id:`recipe-${i}`,name:r[0],emoji:r[1],cal:r[2],protein:r[3],carbs:r[4],fat:r[5],minutes:r[6],category:r[7],ingredients:r[8].split('|').map(t=>{const [name,amount,unit]=t.split(':');return {name,amount:Number(amount),unit}}),steps:'Zutaten vorbereiten, nach Bedarf garen und frisch anrichten. Nach Geschmack würzen.',custom:false}));
export const NOTIFICATIONS={training:{emoji:'🏋️',label:'Training',messages:[['LOCK IN.','Dein Workout startet bald. Let’s go.'],['NO EXCUSES.','Zeit, dein Training durchzuziehen.'],['SHOW UP.','Heute zählt dein Einsatz.']]},football:{emoji:'⚽',label:'Fußball',messages:[['GAME TIME.','Schuhe an. Zeit zu liefern.'],['MATCH READY?','Gleich geht’s auf den Platz.']]},food:{emoji:'🥗',label:'Ernährung',messages:[['FUEL UP.','Zeit für deine geplante Mahlzeit.'],['EAT TO PERFORM.','Gib deinem Körper Energie.']]},water:{emoji:'💧',label:'Wasser',messages:[['WATER BREAK.','Trink ein Glas Wasser.'],['STAY HYDRATED.','Ein paar Schlucke gehen immer.']]},recovery:{emoji:'🌙',label:'Recovery',messages:[['RECOVER STRONGER.','Erholung gehört zum Plan.'],['SLEEP TO GROW.','Mach dich bereit für morgen.']]},daily:{emoji:'🦊',label:'Tagesziele',messages:[['KEEP GOING.','Ein kleiner Schritt zählt auch.'],['REP CHECK-IN.','Wie lief dein Tag?']]},record:{emoji:'🏆',label:'Rekorde',messages:[['NEW PERSONAL BEST.','Stärker als gestern. Neuer Rekord!']]}};
export const DEFAULT_STATE={baseCalories:2400,proteinGoal:160,carbsGoal:260,fatGoal:75,waterGoal:2500,accent:'#c9fa71',notifyTone:'Motivational',notifications:{training:true,football:true,food:true,water:false,recovery:true,daily:false,record:true},quietStart:'22:00',quietEnd:'08:00',sports:[{id:'gym',name:'Gym',emoji:'🏋️',frequency:3,duration:60,rpe:6},{id:'football',name:'Fußball',emoji:'⚽',frequency:2,duration:90,rpe:7}],workouts:[],gymExercises:[{id:'ex1',name:'Lat Pulldown',split:'PULL',sets:[{kg:60,reps:12,done:false},{kg:65,reps:10,done:false}],best:0},{id:'ex2',name:'Bench Press',split:'PUSH',sets:[{kg:50,reps:10,done:false}],best:0},{id:'ex3',name:'Squat',split:'LEGS',sets:[{kg:60,reps:8,done:false}],best:0}],split:'PULL',recipes:RECIPES,meals:[],waterEntries:[],plan:[],shoppingExtras:[],shoppingChecked:[],favorites:[],sleep:8,quality:7,fatigue:3,soreness:{Beine:2,Rücken:2,Brust:1,Schultern:1,Arme:1,Bauch:1},habits:[{id:'habit1',title:'Bewegen',doneDate:''},{id:'habit2',title:'Wasser trinken',doneDate:''},{id:'habit3',title:'Recovery Check-in',doneDate:''}]};
export const isoDate=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
export const today=()=>isoDate(new Date());
export const dateShift=(date,n)=>{const d=new Date(date+'T12:00:00');d.setDate(d.getDate()+n);return isoDate(d)};
export const formatDate=date=>new Date(date+'T12:00:00').toLocaleDateString('de-DE',{weekday:'short',day:'numeric',month:'short'});
export const uid=()=>globalThis.crypto?.randomUUID?.()||`id-${Date.now()}-${Math.random().toString(36).slice(2)}`;
