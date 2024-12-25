import checkListRules from "../checkListRules.js";

// displaying checklist
export const checklist = (req, res) => {

  // console.log('checklist page', checkListRules);
  return res.render('checkList',
    {
      title: "CheckList",
      data: checkListRules
    })
}

// Add New Rule
export const addRule = (req, res) => {
  
  let { ruleKey, ruleValue } = req.body;

  if (ruleKey && ruleValue) {
    // Convert to camelCase
    ruleKey = ruleKey
        .trim() //remove space
        .toLowerCase() // Convert everything to lowercase initially
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
            index === 0 ? word.toLowerCase() : word.toUpperCase()
        ) // Capitalize subsequent words
        .replace(/\s+/g, ''); // Remove all spaces

    const newRule = { [ruleKey]: ruleValue };
    checkListRules.push(newRule);
    console.log('Rule Added:', newRule);
}

return res.redirect('back'); 

}

// Delete Rule
export const deleteRule = (req, res) => {
  const { id } = req.params;
  console.log(id)

  // Remove the rule by index 
  if (id) {
    const ruleIndex = checkListRules.findIndex(rule => Object.keys(rule)[0] === id);
    console.log(ruleIndex);
    if (ruleIndex !== -1) {
      const deletedRule = checkListRules.splice(ruleIndex, 1);
      
      console.log('Rule Deleted:', deletedRule);
      console.log('new rule:', checkListRules);
    }
  }

  return res.redirect('/checklist');

}




