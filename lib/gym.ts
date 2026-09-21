export const gym={name:"KINGDOM GYM",city:"Bettiah",address:"Basant Vihar, Hariwatika Chowk, Bettiah, Bihar 845438, India",phone:"+91 70049 04254",rating:4.5,reviewCount:40,hours:"05:00 AM – 09:00 PM",mapsQuery:"KINGDOM GYM, Basant Vihar, Hariwatika Chowk, Bettiah, Bihar 845438"} as const;
export const visualAssets={
hero:"https://images.unsplash.com/photo-1778828494354-9b717d36dc99?auto=format&fit=crop&fm=jpg&q=82&w=2200",
cardio:"https://images.unsplash.com/photo-1775993167276-743bbcde77e1?auto=format&fit=crop&fm=jpg&q=82&w=1800",
training:"https://images.unsplash.com/photo-1613845205719-8c87760ab728?auto=format&fit=crop&fm=jpg&q=82&w=1600"} as const;
export const goals=[
{id:"strength",label:"Build strength",kicker:"POWER",copy:"A focused route for getting stronger, moving better and tracking progress."},
{id:"muscle",label:"Build muscle",kicker:"HYPERTROPHY",copy:"Explore a structured approach to progressive resistance and consistency."},
{id:"fitness",label:"Improve fitness",kicker:"CONDITIONING",copy:"Mix movement, conditioning and repeatable habits into your week."},
{id:"confidence",label:"Feel better",kicker:"EVERYDAY FITNESS",copy:"Start with a welcoming routine that makes showing up easier."}
] as const;
export type GoalId=(typeof goals)[number]["id"];