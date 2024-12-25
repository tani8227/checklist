import checkListRules from "../checkListRules.js";

// displaying checklist
export const checklist = (req, res) => {

 
  return res.render('checklist',
    {
      title: "checklist",
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
   
    if (ruleIndex !== -1) {
      const deletedRule = checkListRules.splice(ruleIndex, 1);
      
    
    }
  }

  return res.redirect('/checklist');

}




