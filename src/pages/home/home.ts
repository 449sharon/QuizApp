import {
  Component
} from '@angular/core';
import {
  NavController,
  NavParams
} from 'ionic-angular';
import {
  EducationPage
} from '../education/education';

import {
  QuizModel
} from '../../models/education';

import {
  DataStoreProvider
} from '../../providers/data-store/data-store';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Education: Array < QuizModel > = [
    // Education Category
    {
      categoryName: 'Education',
      questions: [{
          question: '1. How many months do we have in a year?',
          options: [{
              option: 'A -6 months'
            },
            {
              option: 'B -12 month'
            },
            {
              option: 'C -1 months'
            },
            {
              option: 'D -10 months'
            }
          ]
        },
        {
          question: ' 2. How many days do we have in a week?',
          options: [{
              option: 'A-8 days'
            },
            {
              option: 'B -5 days'
            },
            {
              option: 'C - 7 days'
            },
            {
              option: 'D -6 days'
            }
          ]
        },

        {
          question: '3. How many colors are there in a rainbow?',
          options: [{
              option: 'A -7'
            },
            {
              option: 'B -5'
            },
            {
              option: 'C -6'
            },
            {
              option: 'D -4'
            }
          ]
        },
        {
          question: '4. Which is the tallest mountain in the world?',
          options: [{
              option: 'A -Mount Everest'
            },
            {
              option: 'B - Table mountain'
            },
            {
              option: 'C -Drakensburg'
            },
            {
              option: 'D -k2 mountain'
            }
          ]
        },
        {
          question: '5.Which two parts of the body continue to grow for your entire life?',
          options: [{
              option: 'A -head'
            },
            {
              option: 'B -Nose and ears'
            },
            {
              option: 'C-eyes'
            },
            {
              option: 'D - teeth'
            }
          ]
        }
      ]
    },
    {
      categoryName: 'Food',
      questions: [{
          question: '1. From which country do potatoes originate?',
          options: [{
              option: 'A - nigeria'
            },
            {
              option: 'B -South America'
            },
            {
              option: 'C - south Africa'
            },
            {
              option: 'D -china'
            }
          ]
        },
        {
          question: '  2. A dried plum is properly known as a .....?',
          options: [{
              option: 'A-prune'
            },
            {
              option: 'B -raisin'
            },
            {
              option: 'C -date'
            },
            {
              option: 'D -peach'
            }
          ]
        },

        {
          question: ' 3.A tomato is a .....? ',
          options: [{
              option: 'A- fruit'
            },
            {
              option: 'B- vegetable'
            },
            {
              option: 'C-  herb'
            },
            {
              option: 'D - meat'
            }
          ]
        },
        {
          question: ' 4. Where was the first McDonald  restaurant located?',
          options: [{
              option: 'A -England'
            },
            {
              option: 'B -California'
            },
            {
              option: 'C -New York'
            },
            {
              option: 'D -Brazil'
            }
          ]
        },
        {
          question: ' 5.McDonald found on which date?',
          options: [{
              option: 'A -May 15, 1940'
            },
            {
              option: 'B -May 15, 1930'
            },
            {
              option: 'C -May 15, 1950'
            },
            {
              option: 'D -May 15, 1910'
            }
          ]
        }
      ]
    },
    {
      categoryName: 'Technology',
      questions: [{
          question: ' 1.Which is a type of Electrically-Erasable Programmable Read-Only Memory? ',
          options: [{
              option: 'A -Flash'
            },
            {
              option: 'B -	Flange'
            },
            {
              option: 'C -Fury'
            },
            {
              option: 'D -FRAM'
            }
          ]
        },
        {
          question: ' 2. Who developed Yahoo?',
          options: [{
              option: 'A-Dennis Ritchie & Ken Thompson'
            },
            {
              option: 'B -David Filo & Jerry Yang'
            },
            {
              option: 'C -Vint Cerf & Robert Kahn'
            },
            {
              option: 'D -Steve Case & Jeff Bezos'
            }
          ]
        },

        {
          question: '3.JPG extension refers usually to what kind of file? ',
          options: [{
              option: 'A -System file '
            },
            {
              option: 'B - Animation/movie file'
            },
            {
              option: 'C -MS Encarta document'
            },
            {
              option: 'D -Image file'
            }
          ]
        },
        {
          question: ' 4.DB computer abbreviation usually means ?  ',
          options: [{
              option: 'A-Database'
            },
            {
              option: 'B- Double Byte'
            },
            {
              option: 'C- Data Block'
            },
            {
              option: 'D -Driver Boot'
            }
          ]
        },
        {
          question: ' 5..INI extension refers usually to what kind of file?',
          options: [{
              option: 'A -Image file'
            },
            {
              option: 'B - System file'
            },
            {
              option: 'C-Hypertext related file'
            },
            {
              option: 'D -Image Color Matching Profile file'
            }
          ]
        }
      ]
    }, {
      categoryName: 'Politics',
      questions: [{
          question: '1. who is the president of EFF?',
          options: [{
              option: 'A -Dali mpofu'
            },
            {
              option: 'B -Thabo Mbeki'
            },
            {
              option: 'C -Jacob Zuma'
            },
            {
              option: 'D -Julius Malema'
            }
          ]
        },
        {
          question: ' 2. who is the first black president in RSA?',
          options: [{
              option: 'A-Nelson Mandela'
            },
            {
              option: 'B -Jacob Zuma'
            },
            {
              option: 'C - -Julius Malema'
            },
            {
              option: 'D -Fikile Mbalula'
            }
          ]
        },

        {
          question: '3.how many children did winnie madikizela had ?',
          options: [{
              option: 'A -7'
            },
            {
              option: 'B -5'
            },
            {
              option: 'C -2'
            },
            {
              option: 'D -4'
            }
          ]
        },
        {
          question: '  4. When year was Nelson Mandela Born?',
          options: [{
              option: 'A -1907'
            },
            {
              option: 'B - 1918'
            },
            {
              option: 'C -1994'
            },
            {
              option: 'D -2010'
            }
          ]
        },
        {
          question: '5.How many black presidents has South Africa had?',
          options: [{
              option: 'A -4'
            },
            {
              option: 'B -5'
            },
            {
              option: 'C-6'
            },
            {
              option: 'D - 7'
            }
          ]
        }
      ]
    },
    {
      categoryName: 'Sports',
      questions: [{
          question: ' 1.  Which nation was the first from Africa to reach the World Cup Finals?',
          options: [{
              option: 'A -Nigeria'
            },
            {
              option: 'B -Egypt'
            },
            {
              option: 'C -South Africa'
            },
            {
              option: 'D -Congo'
            }
          ]
        },
        {
          question: '  2. Orlando Pirates was formed in what year ?',
          options: [{
              option: 'A-1937'
            },
            {
              option: 'B - 2000'
            },
            {
              option: 'C -1950'
            },
            {
              option: 'D -2010'
            }
          ]
        },

        {
          question: '3. Who beat South Africa twice in the 1992 Cricket World Cup?',
          options: [{
              option: 'A-England'
            },
            {
              option: 'B-India'
            },
            {
              option: 'C-Australia'
            },
            {
              option: 'D - West-Indies'
            }
          ]
        },
        {
          question: ' 4. Which country won the first World Cup held in 1930? ',
          options: [{
              option: 'A -Brazil'
            },
            {
              option: 'B -Uruguay'
            },
            {
              option: 'C -New Zealand'
            },
            {
              option: 'D -Spain'
            }
          ]
        },
        {
          question: '5.The test cricket ground Sabina Park is in which country?',
          options: [{
              option: 'A -India'
            },
            {
              option: 'B -Pakistan'
            },
            {
              option: 'C-Jamaica'
            },
            {
              option: 'D -South Africa'
            }
          ]
        }
      ]
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataStoreProvider) {

  }
  education(CName, CQuestions) {
    // console.log(CQuestions);
    this.dataProvider.getQuestions(CQuestions);
    this.navCtrl.push(EducationPage, CName);

  }
}
