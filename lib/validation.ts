export type LeadInput={name:string;phone:string;goal:string;preferredTime?:string;source?:string};
export function validateLead(input:Partial<LeadInput>){
 const name=String(input.name??"").trim(),phone=String(input.phone??"").trim(),goal=String(input.goal??"").trim();
 const errors:Record<string,string>={};
 if(name.length<2)errors.name="Enter your name.";
 if(!/^[+0-9()\-\s]{8,18}$/.test(phone))errors.phone="Enter a valid phone number.";
 if(!goal)errors.goal="Choose a goal.";
 return {ok:Object.keys(errors).length===0,errors,value:{name,phone,goal,preferredTime:input.preferredTime?.trim()||"",source:input.source?.trim()||"website"}};
}