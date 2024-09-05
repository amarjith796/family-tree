export const familyData1 = {
  name: "Rampati Mahato",
  isDeceased: true,
  children: [
    {
      name: "Horil Prasad",
      isDeceased: true,
      children: [
        {
          name: "Awadh Kishore Prasad",
          children: [
            {
              name: "Jay Prakash Kumar",
              children: [],
            },
            { name: "Om Prakash Kumar", children: [] },
            { name: "Ved Prakash Kumar", children: [] },
          ],
        },
        {
          name: "Raj Kishore Prasad",
          isDeceased: true,
          children: [
            { name: "Suganti Devi", children: [] },
            { name: "Sunita Devi", children: [] },
            { name: "Kavita Devi", children: [] },
            { name: "Alka Kumari", children: [] },
            { name: "Anand Kumar", children: [] },
          ],
        },
        {
          name: "Mukhiya Prasad",
          children: [
            { name: "Appu Kumar", children: [] },
            { name: "Aalok Kumar", children: [] },
            { name: "Akhilesh Kumar", children: [] },
          ],
        },
        {
          name: "Darpa Devi",
          isDeceased: true,
          children: [],
        },
        {
          name: "Champa Devi",
          isDeceased: true,
          children: [],
        },
      ],
    },
    {
      name: "Harani Prasad",
      isDeceased: true,
      children: [
        {
          name: "Arjun Singh",
          children: [
            { name: "Amarjith Kumar", children: [] },
            { name: "Vibha Kumari", children: [] },
          ],
        },
        {
          name: "Suresh Prasad",
          children: [
            { name: "Sonam Kumari", children: [] },
            { name: "Shweta Kumari", children: [] },
            { name: "Anamika Kumari", children: [] },
            { name: "Amrita Kumari", children: [] },
            { name: "Adarsh Kumar", children: [] },
          ],
        },
        {
          name: "Subash Prasad",
          children: [
            { name: "Nidhi Kumari", children: [] },
            { name: "Nikhil Kumar", children: [] },
          ],
        },
        { name: "Shakuntala Devi", isDeceased: true, children: [] },
        { name: "Malti Devi", children: [] },
        { name: "Indu Devi", children: [] },
      ],
    },
    {
      name: "Kabutra Devi",
      isDeceased: true,
      children: [],
    },
    {
      name: "Jasso Devi",
      isDeceased: true,
      children: [],
    },
  ],
};

export const familyData = {
  name: "Parent",
  isDeceased: true,
  children: [
    {
      name: "Child1",
      isDeceased: true,
      children: [
        {
          name: "Child12",
          children: [
            {
              name: "Child121",
              children: [
                { name: "Child11111", children: [] },
                { name: "Child111111", children: [] },
              ],
            },
            { name: "Child11112", children: [] },
            { name: "Child1113", children: [] },
          ],
        },
        {
          name: "Child3",
          children: [],
        },
      ],
    },
    {
      name: "Child4",
      children: [],
    },
    {
      name: "Child5",
      children: [],
    },
  ],
};


export const familyData2 = {
  name: "रामपति महतो",
  isRoot: true,
  isDeceased: true,
  children: [
    {
      name: "होरिल प्रसाद (पुत्र)",
      isDeceased: true,
      children: [
        {
          name: "अवध किशोर प्रसाद (पुत्र)",
          children: [],
        },
        {
          name: "राजकिशोर प्रसाद (पुत्र)",
          isDeceased: true,
          spouse: "फुलझरी देवी (पत्नी) ",
          children: [
            { name: "आनंद कुमार (पुत्र) ", children: [] },
          ],
        },
        {
          name: "मुखिया प्रसाद (पुत्र)",
          children: [],
        }
      ],
    },
    {
      name: "हरानी प्रसाद (पुत्र)",
      isDeceased: true,
      children: [
        {
          name: "अर्जुन सिंह (पुत्र)",
          children: [],
        },
        {
          name: "सुरेश प्रसाद (पुत्र)",
          children: [],
        },
        {
          name: "सुबाष प्रसाद (पुत्र)",
          children: [],
        }
      ],
    }
  ],
};