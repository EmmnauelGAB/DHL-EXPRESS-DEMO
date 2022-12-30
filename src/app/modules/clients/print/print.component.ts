import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements AfterViewInit {
  search : String ="";
  displayedColumns: string[] = ['folio', 'date', 'totalGuides','useGuides', 'asingGuides', 'availableGuides', 'accion'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  folio: string;
  date: string;
  totalGuides: number;
  useGuides: number;
  asingGuides: number;
  availableGuides: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
	{
		"folio": "88462511-B9DA-8A2A-CAA6-852A47612771",
		"date": "Feb 5, 2023",
		"totalGuides": 8199,
		"useGuides": 283,
		"asingGuides": 40,
		"availableGuides": 81
	},
	{
		"folio": "EB8DEEB9-528A-7FA4-94CC-9D72418E6D19",
		"date": "Feb 5, 2023",
		"totalGuides": 1796,
		"useGuides": 152,
		"asingGuides": 37,
		"availableGuides": 67
	},
	{
		"folio": "B7100222-86E6-15A5-F5C2-A398F9442C45",
		"date": "Oct 11, 2022",
		"totalGuides": 6192,
		"useGuides": 223,
		"asingGuides": 16,
		"availableGuides": 72
	},
	{
		"folio": "D414671C-65BA-8099-9198-6DADBD5585E5",
		"date": "Sep 2, 2022",
		"totalGuides": 2276,
		"useGuides": 89,
		"asingGuides": 22,
		"availableGuides": 43
	},
	{
		"folio": "6FCF5536-4391-4EE3-9CA5-4374D3236683",
		"date": "Feb 14, 2023",
		"totalGuides": 6384,
		"useGuides": 219,
		"asingGuides": 42,
		"availableGuides": 83
	},
	{
		"folio": "A57CB928-DE3D-53D1-388F-2D5502CF2ED1",
		"date": "Aug 16, 2023",
		"totalGuides": 3789,
		"useGuides": 243,
		"asingGuides": 64,
		"availableGuides": 53
	},
	{
		"folio": "7629B369-6CCA-4B7B-5024-5282E801D937",
		"date": "Apr 17, 2023",
		"totalGuides": 9253,
		"useGuides": 37,
		"asingGuides": 51,
		"availableGuides": 97
	},
	{
		"folio": "1619EEF1-69C8-921B-3C80-81398946AC16",
		"date": "Mar 26, 2022",
		"totalGuides": 9860,
		"useGuides": 291,
		"asingGuides": 20,
		"availableGuides": 49
	},
	{
		"folio": "C5F934E1-BB9C-8792-15A1-665516C18816",
		"date": "Mar 20, 2023",
		"totalGuides": 9854,
		"useGuides": 284,
		"asingGuides": 2,
		"availableGuides": 94
	},
	{
		"folio": "D7595776-0CE1-2A44-BD9E-108A3139A8A5",
		"date": "Oct 9, 2022",
		"totalGuides": 3806,
		"useGuides": 29,
		"asingGuides": 12,
		"availableGuides": 23
	},
	{
		"folio": "1023BF64-8074-E587-9107-3D2C14CFB54D",
		"date": "Jan 20, 2023",
		"totalGuides": 7434,
		"useGuides": 289,
		"asingGuides": 74,
		"availableGuides": 17
	},
	{
		"folio": "63BB8B1D-BD46-283A-2CDC-514265925109",
		"date": "Jul 17, 2023",
		"totalGuides": 5040,
		"useGuides": 194,
		"asingGuides": 59,
		"availableGuides": 31
	},
	{
		"folio": "46713478-6C71-0DCD-423C-D6AB28B11A65",
		"date": "Mar 16, 2023",
		"totalGuides": 3826,
		"useGuides": 162,
		"asingGuides": 78,
		"availableGuides": 55
	},
	{
		"folio": "D9842F3F-89D9-B92E-826C-E89384025D1E",
		"date": "Feb 16, 2022",
		"totalGuides": 9723,
		"useGuides": 124,
		"asingGuides": 42,
		"availableGuides": 2
	},
	{
		"folio": "0FCBDD5D-AA30-D19C-2DD1-989F94132998",
		"date": "May 28, 2023",
		"totalGuides": 8321,
		"useGuides": 213,
		"asingGuides": 46,
		"availableGuides": 79
	},
	{
		"folio": "8BE54CF8-3DDE-1C7C-A4D7-3CBD356795CD",
		"date": "Feb 23, 2022",
		"totalGuides": 8011,
		"useGuides": 36,
		"asingGuides": 62,
		"availableGuides": 55
	},
	{
		"folio": "0A9191D7-C5B8-6FE1-20E5-13B86760A5B5",
		"date": "May 23, 2023",
		"totalGuides": 8975,
		"useGuides": 257,
		"asingGuides": 19,
		"availableGuides": 74
	},
	{
		"folio": "2D2E39C6-8C8F-C778-EBC4-F0384C56219F",
		"date": "Apr 21, 2022",
		"totalGuides": 2487,
		"useGuides": 136,
		"asingGuides": 14,
		"availableGuides": 11
	},
	{
		"folio": "7C5F9DCA-AAC5-AFF0-12A1-94FE7823E822",
		"date": "Dec 5, 2022",
		"totalGuides": 9587,
		"useGuides": 173,
		"asingGuides": 72,
		"availableGuides": 80
	},
	{
		"folio": "207B89A5-764A-ECCE-211E-FAC8A354919B",
		"date": "May 6, 2022",
		"totalGuides": 4444,
		"useGuides": 104,
		"asingGuides": 64,
		"availableGuides": 49
	},
	{
		"folio": "8A69C93E-24C9-7896-E931-76D214309790",
		"date": "Mar 25, 2023",
		"totalGuides": 7431,
		"useGuides": 130,
		"asingGuides": 22,
		"availableGuides": 81
	},
	{
		"folio": "38D126AC-9C63-CB22-BAB6-76855B44ADC4",
		"date": "Sep 25, 2022",
		"totalGuides": 3582,
		"useGuides": 226,
		"asingGuides": 88,
		"availableGuides": 13
	},
	{
		"folio": "3128572E-C3B9-25C1-60FE-B5B5D767DDC4",
		"date": "Sep 29, 2022",
		"totalGuides": 2270,
		"useGuides": 82,
		"asingGuides": 64,
		"availableGuides": 72
	},
	{
		"folio": "CCF47C42-3F7E-9460-399E-2CDA70194F3F",
		"date": "Mar 2, 2023",
		"totalGuides": 4398,
		"useGuides": 233,
		"asingGuides": 49,
		"availableGuides": 9
	},
	{
		"folio": "9D4ECE22-8626-99C4-908C-BAF45DF2195E",
		"date": "Dec 13, 2022",
		"totalGuides": 9420,
		"useGuides": 98,
		"asingGuides": 29,
		"availableGuides": 90
	},
	{
		"folio": "D5FBD7B9-304A-398C-ED06-812873A9F3EE",
		"date": "Nov 3, 2023",
		"totalGuides": 4528,
		"useGuides": 73,
		"asingGuides": 32,
		"availableGuides": 85
	},
	{
		"folio": "64B2E856-92CF-3417-8134-E75670716750",
		"date": "Mar 8, 2022",
		"totalGuides": 9315,
		"useGuides": 155,
		"asingGuides": 26,
		"availableGuides": 30
	},
	{
		"folio": "2A8730B3-BE82-5378-F1EF-AACAD79A8329",
		"date": "Dec 9, 2023",
		"totalGuides": 7658,
		"useGuides": 279,
		"asingGuides": 93,
		"availableGuides": 51
	},
	{
		"folio": "B65E7F74-7365-9182-AB90-43C997C8B7FE",
		"date": "Jan 13, 2022",
		"totalGuides": 7066,
		"useGuides": 230,
		"asingGuides": 86,
		"availableGuides": 60
	},
	{
		"folio": "C214ACDB-394F-5EE9-D384-64E1A18B8EB8",
		"date": "Apr 28, 2023",
		"totalGuides": 2195,
		"useGuides": 142,
		"asingGuides": 30,
		"availableGuides": 83
	},
	{
		"folio": "138998DE-9AE9-F1AB-342B-6D69E9A81BE4",
		"date": "Aug 3, 2023",
		"totalGuides": 5337,
		"useGuides": 274,
		"asingGuides": 40,
		"availableGuides": 54
	},
	{
		"folio": "CCFD0E41-5DB9-9F5A-E4B7-7233C20CA3ED",
		"date": "Dec 7, 2022",
		"totalGuides": 1600,
		"useGuides": 185,
		"asingGuides": 14,
		"availableGuides": 8
	},
	{
		"folio": "1AB29590-5B59-EF84-3C5A-2A3A7C9C7699",
		"date": "Nov 2, 2022",
		"totalGuides": 8850,
		"useGuides": 294,
		"asingGuides": 88,
		"availableGuides": 63
	},
	{
		"folio": "168E5831-B6A0-E738-C3D4-32D16CE591E9",
		"date": "Jul 3, 2022",
		"totalGuides": 6501,
		"useGuides": 37,
		"asingGuides": 31,
		"availableGuides": 1
	},
	{
		"folio": "CE36BE38-B81C-97A9-7539-22B245BBD27F",
		"date": "Aug 7, 2022",
		"totalGuides": 9319,
		"useGuides": 50,
		"asingGuides": 27,
		"availableGuides": 38
	},
	{
		"folio": "C4BD0D1E-251F-0023-4DB9-2D6168BC5315",
		"date": "Jan 4, 2022",
		"totalGuides": 1462,
		"useGuides": 109,
		"asingGuides": 85,
		"availableGuides": 86
	},
	{
		"folio": "CDD4229C-D846-028E-4D13-E8E38A9E1267",
		"date": "Jul 28, 2023",
		"totalGuides": 4786,
		"useGuides": 172,
		"asingGuides": 41,
		"availableGuides": 17
	},
	{
		"folio": "4DB27DB4-607A-90FF-BA3E-D6F5CEFB2898",
		"date": "Feb 19, 2023",
		"totalGuides": 5745,
		"useGuides": 50,
		"asingGuides": 80,
		"availableGuides": 82
	},
	{
		"folio": "EB9B4CAC-585F-CA84-EAAB-8BD15CEA3854",
		"date": "May 2, 2022",
		"totalGuides": 7651,
		"useGuides": 224,
		"asingGuides": 16,
		"availableGuides": 21
	},
	{
		"folio": "5F186E79-BEB4-C17E-D082-852C41B8B8D3",
		"date": "Mar 28, 2023",
		"totalGuides": 7774,
		"useGuides": 61,
		"asingGuides": 66,
		"availableGuides": 36
	},
	{
		"folio": "E93814C5-19E5-84E3-3D2F-F19F7CCB35B7",
		"date": "Jan 5, 2022",
		"totalGuides": 6864,
		"useGuides": 77,
		"asingGuides": 37,
		"availableGuides": 14
	},
	{
		"folio": "61DB2ECC-EAE0-B195-D8A4-9FAC6BA98E9C",
		"date": "May 8, 2022",
		"totalGuides": 2264,
		"useGuides": 274,
		"asingGuides": 92,
		"availableGuides": 87
	},
	{
		"folio": "F57768B4-8517-FFE1-F66B-569C085BE173",
		"date": "May 27, 2023",
		"totalGuides": 7182,
		"useGuides": 68,
		"asingGuides": 6,
		"availableGuides": 87
	},
	{
		"folio": "77C66E81-47B1-1CAB-A9A2-38A488CCB8B8",
		"date": "Jun 12, 2022",
		"totalGuides": 2899,
		"useGuides": 254,
		"asingGuides": 78,
		"availableGuides": 99
	},
	{
		"folio": "1A933818-3D48-A074-3366-D5C7288FCBCD",
		"date": "Jan 31, 2023",
		"totalGuides": 4961,
		"useGuides": 152,
		"asingGuides": 89,
		"availableGuides": 77
	},
	{
		"folio": "A16E6C25-0612-92FD-D665-5A11BB15D7CC",
		"date": "Apr 6, 2023",
		"totalGuides": 9430,
		"useGuides": 87,
		"asingGuides": 1,
		"availableGuides": 51
	},
	{
		"folio": "8B40B7A4-7767-B760-E6CE-4CA0583BB60C",
		"date": "Dec 13, 2023",
		"totalGuides": 7714,
		"useGuides": 105,
		"asingGuides": 85,
		"availableGuides": 29
	},
	{
		"folio": "63C00379-541A-74F3-6774-BEA240A76384",
		"date": "Jul 21, 2022",
		"totalGuides": 2507,
		"useGuides": 92,
		"asingGuides": 79,
		"availableGuides": 75
	},
	{
		"folio": "ADB63BCA-5679-8EC2-655A-69E77A9A5897",
		"date": "Feb 6, 2022",
		"totalGuides": 2215,
		"useGuides": 86,
		"asingGuides": 53,
		"availableGuides": 97
	},
	{
		"folio": "84BDC06B-B128-9B50-CD2A-EE59DC5AB52E",
		"date": "Aug 7, 2023",
		"totalGuides": 2243,
		"useGuides": 95,
		"asingGuides": 37,
		"availableGuides": 24
	},
	{
		"folio": "4D619164-5A5E-0D7B-138A-1A934DF21A8E",
		"date": "Jun 6, 2023",
		"totalGuides": 5871,
		"useGuides": 192,
		"asingGuides": 74,
		"availableGuides": 18
	},
	{
		"folio": "D137B4E6-2B88-A488-83A0-B5FA58632CE9",
		"date": "Apr 5, 2022",
		"totalGuides": 5861,
		"useGuides": 149,
		"asingGuides": 58,
		"availableGuides": 32
	},
	{
		"folio": "EA12DF27-D91C-E0F6-A3BA-E2B4073A8783",
		"date": "Oct 6, 2022",
		"totalGuides": 1260,
		"useGuides": 117,
		"asingGuides": 21,
		"availableGuides": 92
	},
	{
		"folio": "24418A26-2715-887D-B366-F242FB6F289F",
		"date": "Oct 23, 2022",
		"totalGuides": 4384,
		"useGuides": 288,
		"asingGuides": 5,
		"availableGuides": 59
	},
	{
		"folio": "CDDD7BF9-833C-787B-B427-CE52EA9995E5",
		"date": "Jun 19, 2022",
		"totalGuides": 9937,
		"useGuides": 261,
		"asingGuides": 38,
		"availableGuides": 22
	},
	{
		"folio": "6973A4FC-1EE0-4BAB-8968-1BE5B793DDC5",
		"date": "Apr 16, 2023",
		"totalGuides": 3000,
		"useGuides": 107,
		"asingGuides": 68,
		"availableGuides": 60
	},
	{
		"folio": "190A16C9-D432-F03B-6BF4-D9982071D554",
		"date": "Nov 30, 2023",
		"totalGuides": 2264,
		"useGuides": 40,
		"asingGuides": 35,
		"availableGuides": 42
	},
	{
		"folio": "CB753B45-66E8-5964-AC0A-2EA2C58F5ED8",
		"date": "Mar 15, 2023",
		"totalGuides": 9381,
		"useGuides": 172,
		"asingGuides": 78,
		"availableGuides": 12
	},
	{
		"folio": "E96EE334-1449-3852-A6F0-DEF5E0FC5629",
		"date": "Jul 6, 2023",
		"totalGuides": 9305,
		"useGuides": 97,
		"asingGuides": 2,
		"availableGuides": 34
	},
	{
		"folio": "18199E57-2E49-7D5B-ECC5-521505D2D61B",
		"date": "Nov 9, 2022",
		"totalGuides": 9556,
		"useGuides": 169,
		"asingGuides": 89,
		"availableGuides": 22
	},
	{
		"folio": "B4C448FB-85AB-9B37-A7B1-A6279B81C7BE",
		"date": "Jul 26, 2022",
		"totalGuides": 9669,
		"useGuides": 218,
		"asingGuides": 63,
		"availableGuides": 7
	},
	{
		"folio": "BD884D41-CE19-5829-DCB4-D4CD98BB2BB7",
		"date": "Feb 12, 2022",
		"totalGuides": 3390,
		"useGuides": 7,
		"asingGuides": 81,
		"availableGuides": 28
	},
	{
		"folio": "C0BF125B-1D3D-73A0-6588-5E2CD54D2AC1",
		"date": "Apr 25, 2022",
		"totalGuides": 6964,
		"useGuides": 167,
		"asingGuides": 89,
		"availableGuides": 52
	},
	{
		"folio": "A92BA97A-5630-7EDE-2AB2-83ECE45CF067",
		"date": "Sep 21, 2023",
		"totalGuides": 5415,
		"useGuides": 92,
		"asingGuides": 65,
		"availableGuides": 35
	},
	{
		"folio": "357B63F3-970F-B5D7-9EB6-8DF3C4F3A1D9",
		"date": "Feb 20, 2022",
		"totalGuides": 8268,
		"useGuides": 99,
		"asingGuides": 40,
		"availableGuides": 90
	},
	{
		"folio": "9DD713A1-AD7F-7D43-6A96-A72A28C361B4",
		"date": "Apr 12, 2023",
		"totalGuides": 9755,
		"useGuides": 166,
		"asingGuides": 3,
		"availableGuides": 4
	},
	{
		"folio": "DD730BC8-5CD8-2E4E-A3A1-B2018BA9BC2F",
		"date": "Oct 17, 2022",
		"totalGuides": 5627,
		"useGuides": 33,
		"asingGuides": 86,
		"availableGuides": 83
	},
	{
		"folio": "06392436-B626-EDEE-42B5-365C0754E926",
		"date": "Dec 8, 2023",
		"totalGuides": 2395,
		"useGuides": 213,
		"asingGuides": 66,
		"availableGuides": 18
	},
	{
		"folio": "F82DE82D-CFA8-4A7E-D1D5-771E73BDDEE5",
		"date": "Feb 3, 2022",
		"totalGuides": 2630,
		"useGuides": 283,
		"asingGuides": 2,
		"availableGuides": 88
	},
	{
		"folio": "4325EC97-22A3-747D-D28F-1691F531949B",
		"date": "Mar 24, 2022",
		"totalGuides": 7852,
		"useGuides": 174,
		"asingGuides": 93,
		"availableGuides": 23
	},
	{
		"folio": "29778D62-7124-F85D-77CC-4922A3CD709E",
		"date": "Feb 6, 2022",
		"totalGuides": 6991,
		"useGuides": 150,
		"asingGuides": 80,
		"availableGuides": 41
	},
	{
		"folio": "243E6487-178E-080B-54E7-4A76325A2071",
		"date": "May 12, 2023",
		"totalGuides": 9629,
		"useGuides": 156,
		"asingGuides": 5,
		"availableGuides": 84
	},
	{
		"folio": "25A1E5A5-D316-30BA-1BD3-2D107745CCE8",
		"date": "Aug 16, 2022",
		"totalGuides": 7924,
		"useGuides": 88,
		"asingGuides": 29,
		"availableGuides": 63
	},
	{
		"folio": "4ED3EC88-C1BF-F7A8-2EE4-85C66A9A2828",
		"date": "Feb 17, 2023",
		"totalGuides": 2762,
		"useGuides": 207,
		"asingGuides": 64,
		"availableGuides": 73
	},
	{
		"folio": "C9EE5226-BE1B-3553-ECCD-4B735D312121",
		"date": "Dec 23, 2022",
		"totalGuides": 1857,
		"useGuides": 219,
		"asingGuides": 82,
		"availableGuides": 14
	},
	{
		"folio": "9E0A3399-6FF3-0346-7665-6494881725A9",
		"date": "Oct 5, 2023",
		"totalGuides": 6103,
		"useGuides": 56,
		"asingGuides": 19,
		"availableGuides": 98
	},
	{
		"folio": "ACE8A1AA-E753-E955-D55C-7ED16C9699D3",
		"date": "Jan 3, 2023",
		"totalGuides": 7901,
		"useGuides": 181,
		"asingGuides": 27,
		"availableGuides": 49
	},
	{
		"folio": "6DC44679-DA77-BF70-47D5-D91F24D9BFB8",
		"date": "Sep 3, 2023",
		"totalGuides": 8315,
		"useGuides": 184,
		"asingGuides": 13,
		"availableGuides": 12
	},
	{
		"folio": "B68F84D8-B98F-A1DB-F27C-0E4C18CD5752",
		"date": "Oct 9, 2022",
		"totalGuides": 9863,
		"useGuides": 112,
		"asingGuides": 6,
		"availableGuides": 33
	},
	{
		"folio": "DBE44510-3A93-87A1-7153-7ACCB95CB3F2",
		"date": "Feb 21, 2022",
		"totalGuides": 2656,
		"useGuides": 152,
		"asingGuides": 67,
		"availableGuides": 93
	},
	{
		"folio": "1D4457C2-96A2-4F13-1594-312EDB6E08DD",
		"date": "Dec 11, 2023",
		"totalGuides": 1241,
		"useGuides": 189,
		"asingGuides": 18,
		"availableGuides": 28
	},
	{
		"folio": "23245A42-6288-E40F-8997-9DCDCA67BCC1",
		"date": "Dec 24, 2022",
		"totalGuides": 3721,
		"useGuides": 188,
		"asingGuides": 32,
		"availableGuides": 51
	},
	{
		"folio": "4566CF44-1914-1593-712E-46C44E8D44ED",
		"date": "Feb 11, 2023",
		"totalGuides": 1410,
		"useGuides": 109,
		"asingGuides": 83,
		"availableGuides": 60
	},
	{
		"folio": "89EF368C-94A8-1E52-E7E9-E5B6C70129F8",
		"date": "Nov 7, 2023",
		"totalGuides": 8650,
		"useGuides": 275,
		"asingGuides": 66,
		"availableGuides": 86
	},
	{
		"folio": "4A9F7AE2-0C29-D1AE-EE0A-A7E3CAF206E5",
		"date": "Aug 30, 2023",
		"totalGuides": 4435,
		"useGuides": 266,
		"asingGuides": 46,
		"availableGuides": 64
	},
	{
		"folio": "7BC511DC-E8A7-5E63-EB6D-BD56E38EBDD9",
		"date": "Feb 17, 2022",
		"totalGuides": 5706,
		"useGuides": 70,
		"asingGuides": 82,
		"availableGuides": 99
	},
	{
		"folio": "B034F728-5868-FBBC-9680-9E72018BDB9B",
		"date": "Jun 13, 2023",
		"totalGuides": 7969,
		"useGuides": 141,
		"asingGuides": 55,
		"availableGuides": 37
	},
	{
		"folio": "4378A45A-1FE0-75DE-1618-4FF18622BC94",
		"date": "Apr 19, 2023",
		"totalGuides": 3690,
		"useGuides": 264,
		"asingGuides": 9,
		"availableGuides": 38
	},
	{
		"folio": "4BCC3446-516C-BD49-C4B7-3C7B16B3A06D",
		"date": "Aug 7, 2022",
		"totalGuides": 4584,
		"useGuides": 166,
		"asingGuides": 96,
		"availableGuides": 76
	},
	{
		"folio": "2185E78A-EE72-3393-8080-2593831E36D9",
		"date": "Nov 22, 2023",
		"totalGuides": 4469,
		"useGuides": 268,
		"asingGuides": 63,
		"availableGuides": 90
	},
	{
		"folio": "BFCA257A-C208-F515-1C8D-110B877D8E69",
		"date": "May 18, 2023",
		"totalGuides": 2591,
		"useGuides": 13,
		"asingGuides": 71,
		"availableGuides": 42
	},
	{
		"folio": "ECFA912C-DAB4-1B24-692B-8382CCB1D9AA",
		"date": "May 4, 2022",
		"totalGuides": 3773,
		"useGuides": 88,
		"asingGuides": 49,
		"availableGuides": 90
	},
	{
		"folio": "6B741AAE-BF31-11E5-FA69-8CBD7CD5D37B",
		"date": "Jul 20, 2022",
		"totalGuides": 4366,
		"useGuides": 141,
		"asingGuides": 20,
		"availableGuides": 51
	},
	{
		"folio": "70128827-854A-28D8-4AA5-8373B3161B06",
		"date": "Nov 2, 2022",
		"totalGuides": 6407,
		"useGuides": 292,
		"asingGuides": 92,
		"availableGuides": 98
	},
	{
		"folio": "594637A8-C6F5-80CC-E725-9FCB367BFDFA",
		"date": "Mar 21, 2022",
		"totalGuides": 9562,
		"useGuides": 230,
		"asingGuides": 94,
		"availableGuides": 12
	},
	{
		"folio": "C264BBE9-4653-ABC9-DD24-205C52E11618",
		"date": "Mar 11, 2023",
		"totalGuides": 6722,
		"useGuides": 34,
		"asingGuides": 71,
		"availableGuides": 61
	},
	{
		"folio": "57ECED18-B113-7648-4942-1621A9956807",
		"date": "Mar 9, 2022",
		"totalGuides": 2865,
		"useGuides": 138,
		"asingGuides": 92,
		"availableGuides": 86
	},
	{
		"folio": "28BC383E-08A8-9086-CB2D-12D32275CB5D",
		"date": "May 20, 2022",
		"totalGuides": 5541,
		"useGuides": 200,
		"asingGuides": 93,
		"availableGuides": 83
	},
	{
		"folio": "CC31E741-25D2-57EB-DEAC-5A24D56CA349",
		"date": "May 29, 2023",
		"totalGuides": 2891,
		"useGuides": 88,
		"asingGuides": 8,
		"availableGuides": 10
	},
	{
		"folio": "451BEC9C-037C-F22C-BA09-0171E16AA5B5",
		"date": "Jan 29, 2023",
		"totalGuides": 5500,
		"useGuides": 283,
		"asingGuides": 40,
		"availableGuides": 5
	}
]
