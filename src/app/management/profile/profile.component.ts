import { Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements AfterViewInit {
  search : String ="";
  displayedColumns: string[] = ['perfil', 'accion'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(public dialog: MatDialog){

  }

  openDialogDelete() {
    this.dialog.open(DialogContentExampleDialog, {width: '450px'});
   }
}
export interface PeriodicElement {
  position: number;
  name: string;
  lastname: string;
  lastname2: string;
  email: string;
  perfil: string;
}

//on PopUp Delete Perfil
@Component({
  selector: 'profile.component-dialog',
  templateUrl: './profile.component.delete.html',
  styleUrls: ['./profile.component.css']
})
export class DialogContentExampleDialog {

  constructor(public dialog: MatDialog) {}
  closeDialog(){
    this.dialog.closeAll();
  }

}
//end PopUp Delete Perfil
const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 7,
    name: 'Kibo Little',
    lastname: 'Tucker Alvarez',
    lastname2: 'Kirestin Greer',
    email: 'cursus.a@aol.ca',
    perfil: 'Pede Ac Urna Incorporated',
  },
  {
    position: 19,
    name: 'Herrod Solomon',
    lastname: 'Simone Keller',
    lastname2: 'Breanna Bailey',
    email: 'nisi.cum@protonmail.couk',
    perfil: 'Augue Sed Molestie Foundation',
  },
  {
    position: 11,
    name: 'Baker Henson',
    lastname: 'Quemby Clark',
    lastname2: 'Jarrod Huff',
    email: 'adipiscing.lobortis@icloud.edu',
    perfil: 'Imperdiet Ornare In Institute',
  },
  {
    position: 5,
    name: 'Yuri Chase',
    lastname: 'Ross Burgess',
    lastname2: 'Octavius Watts',
    email: 'elit.elit@yahoo.couk',
    perfil: 'Mauris Aliquam Eu Corp.',
  },
  {
    position: 5,
    name: 'Tallulah Sharp',
    lastname: 'Craig Dixon',
    lastname2: 'Justina Phelps',
    email: 'libero.et@google.org',
    perfil: 'Eu Odio Tristique LLC',
  },
  {
    position: 17,
    name: 'Maia Tate',
    lastname: 'Yvonne Acevedo',
    lastname2: 'Jessamine Brock',
    email: 'ipsum.primis.in@hotmail.net',
    perfil: 'Amet Faucibus LLC',
  },
  {
    position: 11,
    name: 'Hoyt Ashley',
    lastname: 'Neville Ashley',
    lastname2: 'Julian Becker',
    email: 'est.ac.facilisis@yahoo.net',
    perfil: 'Laoreet Lectus Quis PC',
  },
  {
    position: 11,
    name: 'Lois Fields',
    lastname: 'Glenna Swanson',
    lastname2: 'Lilah Velez',
    email: 'ligula.nullam@outlook.net',
    perfil: 'Phasellus Nulla Integer LLC',
  },
  {
    position: 11,
    name: 'Aspen Murphy',
    lastname: 'Ulric Sloan',
    lastname2: 'Jesse Phelps',
    email: 'risus.odio.auctor@google.edu',
    perfil: 'A Malesuada LLC',
  },
  {
    position: 19,
    name: 'Devin Donovan',
    lastname: 'Germane Vance',
    lastname2: 'Ella Jefferson',
    email: 'nisi.nibh@yahoo.net',
    perfil: 'Nascetur Ridiculus Incorporated',
  },
  {
    position: 17,
    name: 'Alexander Summers',
    lastname: 'Byron Hooper',
    lastname2: 'Amery Norris',
    email: 'eu.nulla@aol.net',
    perfil: 'Dolor Nulla Ltd',
  },
  {
    position: 5,
    name: 'Dorian Leach',
    lastname: 'Inga Wiggins',
    lastname2: 'Walter Dickerson',
    email: 'libero.proin.sed@google.edu',
    perfil: 'Tellus Limited',
  },
  {
    position: 13,
    name: 'Danielle Ortega',
    lastname: 'Liberty Gaines',
    lastname2: 'Dora Cohen',
    email: 'egestas.urna@yahoo.com',
    perfil: 'Cubilia Curae Associates',
  },
  {
    position: 5,
    name: 'Michael Burch',
    lastname: 'Simone Macias',
    lastname2: 'Teegan Weiss',
    email: 'risus.a@hotmail.couk',
    perfil: 'Sed Institute',
  },
  {
    position: 7,
    name: 'Robert Barber',
    lastname: 'Martha Hart',
    lastname2: 'Germane Newton',
    email: 'gravida.molestie.arcu@protonmail.couk',
    perfil: 'Lacinia Limited',
  },
  {
    position: 15,
    name: 'Elijah Hutchinson',
    lastname: 'Herrod Flowers',
    lastname2: 'Sharon Young',
    email: 'cum@aol.org',
    perfil: 'Metus In Lorem Associates',
  },
  {
    position: 15,
    name: 'Davis French',
    lastname: 'Russell Morton',
    lastname2: 'Buffy Reid',
    email: 'id.erat.etiam@hotmail.edu',
    perfil: 'Nec Urna Suscipit Corp.',
  },
  {
    position: 17,
    name: 'Jesse Carver',
    lastname: 'Reece Lowery',
    lastname2: 'Stuart Chase',
    email: 'pretium.et.rutrum@outlook.org',
    perfil: 'Sem Inc.',
  },
  {
    position: 7,
    name: 'Cullen Sutton',
    lastname: 'Abraham Fry',
    lastname2: 'Raja Hines',
    email: 'ante.lectus@google.couk',
    perfil: 'Id Risus Quis Ltd',
  },
  {
    position: 17,
    name: 'Craig Ferrell',
    lastname: 'Lance Whitaker',
    lastname2: 'Evan Shaffer',
    email: 'a@hotmail.ca',
    perfil: 'Ornare Foundation',
  },
  {
    position: 11,
    name: 'Azalia Jarvis',
    lastname: 'Summer Mendez',
    lastname2: 'Willow Franks',
    email: 'nunc@aol.couk',
    perfil: 'Ridiculus Institute',
  },
  {
    position: 13,
    name: 'Brynn Kirkland',
    lastname: 'Lucian Barlow',
    lastname2: 'Xaviera Harding',
    email: 'lacinia.vitae@yahoo.com',
    perfil: 'Taciti Sociosqu Institute',
  },
  {
    position: 19,
    name: 'Autumn Callahan',
    lastname: 'Richard Macdonald',
    lastname2: 'Rhoda Bruce',
    email: 'dignissim.tempor@icloud.com',
    perfil: 'Duis Ltd',
  },
  {
    position: 17,
    name: 'Vivian Fox',
    lastname: 'Ira Rocha',
    lastname2: 'Kenyon Mckenzie',
    email: 'gravida.sagittis.duis@icloud.com',
    perfil: 'Nulla Inc.',
  },
  {
    position: 15,
    name: 'Kieran Cain',
    lastname: 'Ainsley Sloan',
    lastname2: 'Destiny Woods',
    email: 'quis@yahoo.org',
    perfil: 'Augue Ut Lacus LLP',
  },
  {
    position: 7,
    name: 'Wallace Joyce',
    lastname: 'Dennis Pennington',
    lastname2: 'Rhea Houston',
    email: 'quam.a@aol.net',
    perfil: 'Integer In Magna Corp.',
  },
  {
    position: 11,
    name: 'Kylie Morton',
    lastname: 'Clark Britt',
    lastname2: 'Haviva Page',
    email: 'semper.pretium@google.edu',
    perfil: 'Ipsum Foundation',
  },
  {
    position: 11,
    name: 'Cally Barber',
    lastname: 'Zorita Strong',
    lastname2: 'Gloria Olsen',
    email: 'euismod.ac@google.net',
    perfil: 'Enim Nunc Ut Company',
  },
  {
    position: 3,
    name: 'Faith Hale',
    lastname: 'Neville Floyd',
    lastname2: 'Noel Hancock',
    email: 'eu.neque@yahoo.edu',
    perfil: 'Posuere Cubilia Ltd',
  },
  {
    position: 15,
    name: 'Amaya Reese',
    lastname: 'Raven Bennett',
    lastname2: 'Talon Clemons',
    email: 'duis.gravida.praesent@protonmail.ca',
    perfil: 'Sed Nec Metus Foundation',
  },
  {
    position: 13,
    name: 'Melanie Leon',
    lastname: 'Vernon Valentine',
    lastname2: 'Remedios Leblanc',
    email: 'vel@yahoo.com',
    perfil: 'Hendrerit Consectetuer Foundation',
  },
  {
    position: 9,
    name: 'Melanie Burris',
    lastname: 'Dorothy Mayer',
    lastname2: 'Ramona Valenzuela',
    email: 'augue.id.ante@yahoo.edu',
    perfil: 'Enim Foundation',
  },
  {
    position: 1,
    name: 'Walter Benson',
    lastname: 'Ava Lott',
    lastname2: 'Rooney Smith',
    email: 'elit.curabitur@icloud.org',
    perfil: 'Sit Amet LLC',
  },
  {
    position: 13,
    name: 'Chava Dotson',
    lastname: 'Kylynn Lawson',
    lastname2: 'Dillon Mccormick',
    email: 'euismod.et.commodo@protonmail.net',
    perfil: 'Lobortis Ultrices LLP',
  },
  {
    position: 9,
    name: 'Bruce Hansen',
    lastname: 'Ashton Malone',
    lastname2: 'Ferdinand Potts',
    email: 'dui@aol.com',
    perfil: 'Curabitur Massa Vestibulum Inc.',
  },
  {
    position: 15,
    name: 'Adria Bowen',
    lastname: 'Laith Sweeney',
    lastname2: 'Genevieve Aguirre',
    email: 'feugiat.nec.diam@hotmail.com',
    perfil: 'Ornare Elit LLC',
  },
  {
    position: 19,
    name: 'Hayden Logan',
    lastname: 'Alec Mckinney',
    lastname2: 'Alana Leon',
    email: 'nunc.ac.mattis@google.com',
    perfil: 'Quis PC',
  },
  {
    position: 11,
    name: 'Judah Frye',
    lastname: 'Magee Beasley',
    lastname2: 'Keith Weeks',
    email: 'fermentum@aol.edu',
    perfil: 'Dui Foundation',
  },
  {
    position: 17,
    name: 'Rowan Salinas',
    lastname: 'Mohammad Navarro',
    lastname2: 'Gisela Austin',
    email: 'adipiscing.elit.curabitur@hotmail.couk',
    perfil: 'Sed Neque Institute',
  },
  {
    position: 3,
    name: 'May Dixon',
    lastname: 'Rana Ewing',
    lastname2: 'Karina Henson',
    email: 'justo.praesent@outlook.edu',
    perfil: 'Leo Elementum LLP',
  },
  {
    position: 5,
    name: 'Alma Mathews',
    lastname: 'Selma King',
    lastname2: 'Beck Macias',
    email: 'aliquam@yahoo.edu',
    perfil: 'Nibh Phasellus Consulting',
  },
  {
    position: 11,
    name: 'Brent Aguilar',
    lastname: 'George Rocha',
    lastname2: 'Brenna Beach',
    email: 'amet.luctus.vulputate@hotmail.couk',
    perfil: 'Quis Urna Nunc Incorporated',
  },
  {
    position: 3,
    name: 'Griffin Tucker',
    lastname: 'Garrett Lane',
    lastname2: 'Ariana Wiggins',
    email: 'scelerisque.neque@icloud.com',
    perfil: 'Amet Risus Ltd',
  },
  {
    position: 13,
    name: 'Harding Adams',
    lastname: 'Yoshio Ratliff',
    lastname2: 'Ifeoma Harvey',
    email: 'quisque.ornare@icloud.com',
    perfil: 'Tincidunt Aliquam Arcu Corporation',
  },
  {
    position: 3,
    name: 'Idona Velazquez',
    lastname: 'Blake Kline',
    lastname2: 'Rylee Summers',
    email: 'ac.feugiat@hotmail.couk',
    perfil: 'Ut LLC',
  },
  {
    position: 17,
    name: 'Dustin Jarvis',
    lastname: 'Unity Young',
    lastname2: 'Derek Blake',
    email: 'mi@aol.org',
    perfil: 'Aliquam Nec Incorporated',
  },
  {
    position: 3,
    name: 'Jaime Glenn',
    lastname: 'Mufutau Little',
    lastname2: 'Camden Haynes',
    email: 'eget.venenatis@hotmail.edu',
    perfil: 'Etiam Bibendum PC',
  },
  {
    position: 17,
    name: 'Kelly Bryan',
    lastname: 'Nero Floyd',
    lastname2: 'Nora Gates',
    email: 'cras.sed@protonmail.net',
    perfil: 'Ridiculus Mus Aenean LLP',
  },
  {
    position: 5,
    name: 'Avram Nichols',
    lastname: 'Dennis Patel',
    lastname2: 'Nash Vazquez',
    email: 'suscipit@protonmail.net',
    perfil: 'Diam Sed Consulting',
  },
  {
    position: 1,
    name: 'Stacey Rush',
    lastname: 'Marvin Cohen',
    lastname2: 'Lynn Bonner',
    email: 'sollicitudin@google.net',
    perfil: 'Adipiscing Consulting',
  },
  {
    position: 17,
    name: 'Blythe Collier',
    lastname: 'Oliver Calderon',
    lastname2: 'Martina Hubbard',
    email: 'tincidunt@icloud.org',
    perfil: 'Fermentum Incorporated',
  },
  {
    position: 11,
    name: 'Nayda Galloway',
    lastname: 'Hanae Rios',
    lastname2: 'Lance Bray',
    email: 'metus.urna.convallis@aol.com',
    perfil: 'Mollis Non Limited',
  },
  {
    position: 11,
    name: 'Slade Mccarthy',
    lastname: 'Geraldine Neal',
    lastname2: 'Wilma Caldwell',
    email: 'posuere.vulputate@google.org',
    perfil: 'Sed Turpis Inc.',
  },
  {
    position: 3,
    name: 'Shelby Chan',
    lastname: 'Zeph Barrett',
    lastname2: 'Jena Bates',
    email: 'facilisis.facilisis.magna@icloud.org',
    perfil: 'Lacinia Vitae PC',
  },
  {
    position: 1,
    name: 'Alisa Chen',
    lastname: 'Boris Carson',
    lastname2: 'Aquila Hancock',
    email: 'non@yahoo.edu',
    perfil: 'Risus Donec Ltd',
  },
  {
    position: 5,
    name: 'Amena Cooper',
    lastname: 'Maggy Hurst',
    lastname2: 'Idola Hebert',
    email: 'euismod@yahoo.ca',
    perfil: 'Ut Nisi A Foundation',
  },
  {
    position: 15,
    name: 'Alfreda Hoffman',
    lastname: 'Jillian Lowe',
    lastname2: 'Palmer Mcintosh',
    email: 'montes.nascetur@protonmail.ca',
    perfil: 'Odio Sagittis Semper Industries',
  },
  {
    position: 3,
    name: 'Jenette Monroe',
    lastname: 'Orli Potter',
    lastname2: 'Tyler Yang',
    email: 'et.magnis@aol.edu',
    perfil: 'Egestas Sed Industries',
  },
  {
    position: 15,
    name: 'Harding Calderon',
    lastname: 'Ifeoma Mooney',
    lastname2: 'Tallulah Daniels',
    email: 'elementum.sem.vitae@yahoo.com',
    perfil: 'Lacus Vestibulum Associates',
  },
  {
    position: 11,
    name: 'Cyrus Byrd',
    lastname: 'Destiny Martin',
    lastname2: 'Vera Reeves',
    email: 'vestibulum.ut.eros@protonmail.edu',
    perfil: 'Diam Sed Diam Corp.',
  },
  {
    position: 17,
    name: 'Dillon Haley',
    lastname: 'Wendy Hester',
    lastname2: 'Elijah Kent',
    email: 'consequat.auctor@aol.org',
    perfil: 'Sit Amet Foundation',
  },
  {
    position: 9,
    name: 'Wyatt Colon',
    lastname: 'Vladimir Barlow',
    lastname2: 'Uriel Ray',
    email: 'aliquam.fringilla.cursus@icloud.edu',
    perfil: 'Ipsum Porta Foundation',
  },
  {
    position: 13,
    name: 'Ezekiel Kim',
    lastname: 'Kathleen Bishop',
    lastname2: 'Brady Hines',
    email: 'lorem.luctus.ut@hotmail.net',
    perfil: 'Nec Limited',
  },
  {
    position: 13,
    name: 'Sydnee Bishop',
    lastname: 'Lareina Moon',
    lastname2: 'Isaac Holcomb',
    email: 'nullam@google.org',
    perfil: 'Consectetuer Associates',
  },
  {
    position: 9,
    name: 'Jesse Watson',
    lastname: 'Lydia Small',
    lastname2: 'Rajah Hughes',
    email: 'et.ipsum@aol.ca',
    perfil: 'Ut Cursus Luctus PC',
  },
  {
    position: 11,
    name: 'Rosalyn Lynn',
    lastname: 'Cleo Mcfadden',
    lastname2: 'Nadine Hampton',
    email: 'est.vitae@hotmail.edu',
    perfil: 'Ante Iaculis Corp.',
  },
  {
    position: 1,
    name: 'Aiko Schneider',
    lastname: 'Armand Le',
    lastname2: 'Mallory Williamson',
    email: 'ut.ipsum@aol.couk',
    perfil: 'Laoreet Inc.',
  },
  {
    position: 5,
    name: 'Eaton Mcfadden',
    lastname: 'Leonard Harper',
    lastname2: 'Mariam Garrison',
    email: 'sit.amet.lorem@icloud.net',
    perfil: 'Vitae Orci Phasellus Corporation',
  },
  {
    position: 17,
    name: 'Barbara Poole',
    lastname: 'Britanney Larson',
    lastname2: 'Forrest Fowler',
    email: 'tempor.arcu.vestibulum@outlook.com',
    perfil: 'Leo Morbi LLP',
  },
  {
    position: 3,
    name: 'Brian Lambert',
    lastname: 'Kimberley Sharpe',
    lastname2: 'Keelie Puckett',
    email: 'curae.donec@google.com',
    perfil: 'Diam Lorem LLC',
  },
  {
    position: 11,
    name: 'Phoebe Barker',
    lastname: 'Silas Acevedo',
    lastname2: 'Imogene Hatfield',
    email: 'pellentesque.habitant.morbi@protonmail.com',
    perfil: 'Vel Convallis In Inc.',
  },
  {
    position: 19,
    name: 'Otto Wynn',
    lastname: 'Porter Pruitt',
    lastname2: 'Raphael Casey',
    email: 'arcu.eu@outlook.ca',
    perfil: 'Auctor Ullamcorper LLC',
  },
  {
    position: 5,
    name: 'Kuame Robertson',
    lastname: 'Miriam Barry',
    lastname2: 'Kirby Mosley',
    email: 'auctor.non.feugiat@yahoo.couk',
    perfil: 'Nunc Ac Mattis Incorporated',
  },
  {
    position: 17,
    name: 'Adrienne Estes',
    lastname: 'Rooney Morrison',
    lastname2: 'Bo Chavez',
    email: 'et.malesuada.fames@hotmail.couk',
    perfil: 'Posuere At PC',
  },
  {
    position: 11,
    name: 'Madeline Larson',
    lastname: 'Tallulah Mcclain',
    lastname2: 'Uma Garrison',
    email: 'fusce.fermentum@icloud.com',
    perfil: 'Nulla Consulting',
  },
  {
    position: 13,
    name: 'Chester Mack',
    lastname: 'Lillian Jenkins',
    lastname2: 'Aileen Hopper',
    email: 'penatibus.et@aol.ca',
    perfil: 'Magna Sed Foundation',
  },
  {
    position: 9,
    name: 'Marsden Rosario',
    lastname: 'Halla Ryan',
    lastname2: 'Cole Randall',
    email: 'rutrum.non.hendrerit@google.edu',
    perfil: 'Odio Semper Inc.',
  },
  {
    position: 7,
    name: 'Kiara Morin',
    lastname: 'Abdul Maldonado',
    lastname2: 'Melanie Gonzalez',
    email: 'at.auctor@outlook.ca',
    perfil: 'Id Corp.',
  },
  {
    position: 13,
    name: 'Erica Cash',
    lastname: 'Heather Sanchez',
    lastname2: 'Scarlet Mcmahon',
    email: 'facilisis.eget@yahoo.com',
    perfil: 'Gravida Sagittis Corp.',
  },
  {
    position: 9,
    name: 'Xyla Lindsay',
    lastname: 'Lynn Carrillo',
    lastname2: 'Porter Pacheco',
    email: 'tristique.ac.eleifend@icloud.edu',
    perfil: 'Maecenas Ornare Egestas Incorporated',
  },
  {
    position: 5,
    name: 'Emery Wagner',
    lastname: 'Craig Ayala',
    lastname2: 'Yuri Sweet',
    email: 'ut.nulla.cras@protonmail.ca',
    perfil: 'Condimentum Eget Volutpat Industries',
  },
  {
    position: 9,
    name: 'Eleanor Haney',
    lastname: 'Keefe Wallace',
    lastname2: 'Micah Hicks',
    email: 'nibh.donec@outlook.net',
    perfil: 'Euismod Est Industries',
  },
  {
    position: 13,
    name: 'Samuel Potter',
    lastname: 'Grant Osborn',
    lastname2: 'Armand Becker',
    email: 'luctus.ipsum@protonmail.net',
    perfil: 'Sollicitudin Orci Corporation',
  },
  {
    position: 19,
    name: 'Quynn Kelley',
    lastname: 'Mason Allen',
    lastname2: 'Clio Estes',
    email: 'tincidunt@protonmail.edu',
    perfil: 'Leo In Institute',
  },
  {
    position: 17,
    name: 'Rylee Trujillo',
    lastname: 'Farrah Bush',
    lastname2: 'Phelan Benton',
    email: 'proin@protonmail.edu',
    perfil: 'Montes Nascetur Corp.',
  },
  {
    position: 7,
    name: 'Julian Stafford',
    lastname: 'Ava Bolton',
    lastname2: 'Wynter Ford',
    email: 'curabitur.vel@google.edu',
    perfil: 'Adipiscing Fringilla PC',
  },
  {
    position: 3,
    name: 'Lee Coffey',
    lastname: 'Avram Cunningham',
    lastname2: 'Paloma Watson',
    email: 'aliquam@icloud.net',
    perfil: 'Dis Limited',
  },
  {
    position: 7,
    name: 'Barrett England',
    lastname: 'Mallory Osborne',
    lastname2: 'Vera Christian',
    email: 'tristique@google.couk',
    perfil: 'Mauris Nulla Associates',
  },
  {
    position: 9,
    name: 'Meredith Golden',
    lastname: 'Jerome Douglas',
    lastname2: 'Alexa Salazar',
    email: 'nibh.dolor@aol.edu',
    perfil: 'Lacinia Company',
  },
  {
    position: 3,
    name: 'Kane Osborn',
    lastname: 'Hiram Montgomery',
    lastname2: 'Vivien Le',
    email: 'nisi.magna.sed@google.com',
    perfil: 'Sem LLC',
  },
  {
    position: 15,
    name: 'Dustin Mclean',
    lastname: 'Medge Dunlap',
    lastname2: 'Ignatius Erickson',
    email: 'dictum.sapien@yahoo.net',
    perfil: 'Ac Turpis Egestas Industries',
  },
  {
    position: 9,
    name: 'Tallulah Camacho',
    lastname: 'Buffy Wagner',
    lastname2: 'Cruz Leonard',
    email: 'nunc.lectus@icloud.com',
    perfil: 'Suspendisse Dui Institute',
  },
  {
    position: 5,
    name: 'Claire Greer',
    lastname: 'Diana Campos',
    lastname2: 'Kaitlin Reynolds',
    email: 'ullamcorper.velit@protonmail.org',
    perfil: 'Enim Gravida LLC',
  },
  {
    position: 1,
    name: 'Olivia Oliver',
    lastname: 'Kimberly Fuentes',
    lastname2: 'Jermaine Hubbard',
    email: 'lacus.quisque@protonmail.edu',
    perfil: 'Nulla Institute',
  },
  {
    position: 17,
    name: 'Felicia Rich',
    lastname: 'Leroy Kerr',
    lastname2: 'Austin Kline',
    email: 'dapibus.gravida.aliquam@icloud.edu',
    perfil: 'Magna Suspendisse Associates',
  },
  {
    position: 17,
    name: 'Unity Lloyd',
    lastname: 'Abraham Dickson',
    lastname2: 'Kiara Harper',
    email: 'semper.pretium@aol.couk',
    perfil: 'Lorem Corp.',
  },
  {
    position: 5,
    name: 'Ivor Kirk',
    lastname: 'Alden Figueroa',
    lastname2: 'Wang Ellison',
    email: 'facilisis.suspendisse.commodo@hotmail.com',
    perfil: 'Pede Nunc Inc.',
  },
  {
    position: 5,
    name: 'Chase Gomez',
    lastname: 'Kessie Wells',
    lastname2: 'Curran Head',
    email: 'scelerisque.dui@icloud.org',
    perfil: 'Id Ante Nunc Institute',
  },
  {
    position: 1,
    name: 'Ora Alvarez',
    lastname: 'Alisa Carey',
    lastname2: 'Ivory Stone',
    email: 'tempor@hotmail.couk',
    perfil: 'Est Ac Incorporated',
  },
  {
    position: 11,
    name: 'Amery Page',
    lastname: 'Cameron Moran',
    lastname2: 'Noah Combs',
    email: 'molestie.tortor@yahoo.edu',
    perfil: 'Nascetur Ridiculus Mus PC',
  },
];
