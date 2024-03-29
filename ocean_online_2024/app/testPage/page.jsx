'use client'
import { FilterMatchMode } from 'primereact/api'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React, { useEffect, useState } from 'react'

function Page() {
    const mock = [{ "id": 1, "name": "Ibbie", "lastName": "McCalister", "age": 99, "country": "Greece", "detail": "Room 57" },
    { "id": 2, "name": "Upton", "lastName": "Abarough", "age": 12, "country": "Russia", "detail": "Apt 616" },
    { "id": 3, "name": "Weston", "lastName": "Touhig", "age": 33, "country": "China", "detail": "Apt 1092" },
    { "id": 4, "name": "Valentia", "lastName": "Eburah", "age": 63, "country": "Russia", "detail": "Room 1542" },
    { "id": 5, "name": "Wyatan", "lastName": "Crampin", "age": 16, "country": "China", "detail": "Suite 79" },
    { "id": 6, "name": "Patricia", "lastName": "Rogliero", "age": 33, "country": "Indonesia", "detail": "PO Box 70448" },
    { "id": 7, "name": "Lamond", "lastName": "Merrell", "age": 34, "country": "China", "detail": "Room 1030" },
    { "id": 8, "name": "Ragnar", "lastName": "Edinburough", "age": 17, "country": "China", "detail": "Apt 1002" },
    { "id": 9, "name": "Cookie", "lastName": "Durnill", "age": 70, "country": "Japan", "detail": "Apt 1387" },
    { "id": 10, "name": "Davy", "lastName": "Dootson", "age": 84, "country": "Saint Lucia", "detail": "14th Floor" },
    { "id": 11, "name": "Adaline", "lastName": "Sidry", "age": 65, "country": "China", "detail": "Apt 11" },
    { "id": 12, "name": "Farand", "lastName": "Karolczyk", "age": 47, "country": "Indonesia", "detail": "Apt 1242" },
    { "id": 13, "name": "Arther", "lastName": "Hartshorne", "age": 84, "country": "China", "detail": "18th Floor" },
    { "id": 14, "name": "Kurt", "lastName": "Bibey", "age": 9, "country": "Portugal", "detail": "17th Floor" },
    { "id": 15, "name": "Suzann", "lastName": "Tackes", "age": 96, "country": "Croatia", "detail": "17th Floor" },
    { "id": 16, "name": "Roselle", "lastName": "Culvey", "age": 52, "country": "Afghanistan", "detail": "Apt 502" },
    { "id": 17, "name": "Franklin", "lastName": "Bowfin", "age": 25, "country": "Burkina Faso", "detail": "PO Box 24804" },
    { "id": 18, "name": "Sullivan", "lastName": "Imlin", "age": 69, "country": "Indonesia", "detail": "10th Floor" },
    { "id": 19, "name": "Gypsy", "lastName": "Gaughan", "age": 33, "country": "Cuba", "detail": "Room 11" },
    { "id": 20, "name": "Chlo", "lastName": "Ayliff", "age": 34, "country": "China", "detail": "Room 1011" },
    { "id": 21, "name": "Ronni", "lastName": "Champneys", "age": 90, "country": "China", "detail": "Apt 1078" },
    { "id": 22, "name": "Herc", "lastName": "Reisenstein", "age": 10, "country": "China", "detail": "Suite 75" },
    { "id": 23, "name": "Karil", "lastName": "Gwilt", "age": 97, "country": "China", "detail": "Room 380" },
    { "id": 24, "name": "Jude", "lastName": "Wadley", "age": 92, "country": "Albania", "detail": "PO Box 4928" },
    { "id": 25, "name": "Thatch", "lastName": "Bester", "age": 22, "country": "Cuba", "detail": "Room 1139" },
    { "id": 26, "name": "Paul", "lastName": "Adolfsen", "age": 77, "country": "Panama", "detail": "Room 54" },
    { "id": 27, "name": "Moselle", "lastName": "Ovenden", "age": 87, "country": "China", "detail": "Apt 871" },
    { "id": 28, "name": "Doro", "lastName": "Rabl", "age": 70, "country": "Czech Republic", "detail": "1st Floor" },
    { "id": 29, "name": "Paddie", "lastName": "De Minico", "age": 62, "country": "Chile", "detail": "PO Box 49849" },
    { "id": 30, "name": "Evangelia", "lastName": "McGuinley", "age": 44, "country": "Indonesia", "detail": "6th Floor" },
    { "id": 31, "name": "Rafferty", "lastName": "Arsnell", "age": 37, "country": "France", "detail": "Apt 1494" },
    { "id": 32, "name": "Elisabetta", "lastName": "Samudio", "age": 29, "country": "Iran", "detail": "Room 565" },
    { "id": 33, "name": "Thedric", "lastName": "Rosenblatt", "age": 3, "country": "Laos", "detail": "PO Box 90792" },
    { "id": 34, "name": "Karia", "lastName": "Marzella", "age": 99, "country": "Niger", "detail": "Apt 1825" },
    { "id": 35, "name": "Sorcha", "lastName": "Shirt", "age": 92, "country": "Greece", "detail": "Suite 38" },
    { "id": 36, "name": "Townie", "lastName": "Presdee", "age": 72, "country": "China", "detail": "4th Floor" },
    { "id": 37, "name": "Wilhelmina", "lastName": "Janiszewski", "age": 69, "country": "China", "detail": "PO Box 84004" },
    { "id": 38, "name": "Maggi", "lastName": "Royste", "age": 46, "country": "Ivory Coast", "detail": "Room 816" },
    { "id": 39, "name": "Danny", "lastName": "Stackbridge", "age": 55, "country": "Indonesia", "detail": "1st Floor" },
    { "id": 40, "name": "Alina", "lastName": "Sollett", "age": 59, "country": "Peru", "detail": "Suite 29" },
    { "id": 41, "name": "Ardys", "lastName": "Sweett", "age": 24, "country": "France", "detail": "18th Floor" },
    { "id": 42, "name": "Sapphire", "lastName": "Blankman", "age": 29, "country": "Peru", "detail": "Suite 44" },
    { "id": 43, "name": "Noam", "lastName": "Claringbold", "age": 79, "country": "Macedonia", "detail": "Apt 590" },
    { "id": 44, "name": "Hodge", "lastName": "Edy", "age": 26, "country": "Russia", "detail": "PO Box 64966" },
    { "id": 45, "name": "Tildie", "lastName": "Gabbat", "age": 38, "country": "Russia", "detail": "Suite 73" },
    { "id": 46, "name": "Anet", "lastName": "Skipworth", "age": 47, "country": "Philippines", "detail": "Suite 17" },
    { "id": 47, "name": "Danice", "lastName": "Heinssen", "age": 92, "country": "Indonesia", "detail": "Suite 38" },
    { "id": 48, "name": "Parke", "lastName": "Donovin", "age": 11, "country": "Czech Republic", "detail": "4th Floor" },
    { "id": 49, "name": "Sylas", "lastName": "Thecham", "age": 65, "country": "Macedonia", "detail": "Suite 83" },
    { "id": 50, "name": "Dulcia", "lastName": "Ferenc", "age": 88, "country": "Kenya", "detail": "Suite 4" },
    { "id": 51, "name": "Yehudit", "lastName": "Fonzo", "age": 17, "country": "Mongolia", "detail": "14th Floor" },
    { "id": 52, "name": "Linette", "lastName": "Pakes", "age": 29, "country": "Japan", "detail": "Apt 33" },
    { "id": 53, "name": "Kipper", "lastName": "Yegorshin", "age": 30, "country": "China", "detail": "Room 809" },
    { "id": 54, "name": "Chris", "lastName": "Fasham", "age": 8, "country": "Malaysia", "detail": "13th Floor" },
    { "id": 55, "name": "Arturo", "lastName": "Morcombe", "age": 61, "country": "Malaysia", "detail": "20th Floor" },
    { "id": 56, "name": "Genevra", "lastName": "Jearum", "age": 40, "country": "Indonesia", "detail": "Apt 1543" },
    { "id": 57, "name": "Andeee", "lastName": "Common", "age": 77, "country": "Democratic Republic of the Congo", "detail": "Apt 1136" },
    { "id": 58, "name": "Moses", "lastName": "Brogan", "age": 70, "country": "France", "detail": "17th Floor" },
    { "id": 59, "name": "Cleon", "lastName": "Routham", "age": 53, "country": "China", "detail": "5th Floor" },
    { "id": 60, "name": "Valentine", "lastName": "Jorez", "age": 87, "country": "China", "detail": "Apt 1947" },
    { "id": 61, "name": "Harp", "lastName": "Paskell", "age": 19, "country": "Kazakhstan", "detail": "10th Floor" },
    { "id": 62, "name": "Augy", "lastName": "Dowall", "age": 11, "country": "Venezuela", "detail": "PO Box 27418" },
    { "id": 63, "name": "Pavel", "lastName": "Couronne", "age": 61, "country": "Pakistan", "detail": "Room 354" },
    { "id": 64, "name": "Imelda", "lastName": "Bastiman", "age": 14, "country": "China", "detail": "Apt 1147" },
    { "id": 65, "name": "Faulkner", "lastName": "Saintpierre", "age": 97, "country": "Egypt", "detail": "14th Floor" },
    { "id": 66, "name": "Aldrich", "lastName": "Genner", "age": 54, "country": "Indonesia", "detail": "PO Box 10331" },
    { "id": 67, "name": "Elton", "lastName": "Martellini", "age": 87, "country": "Indonesia", "detail": "Suite 44" },
    { "id": 68, "name": "Danyette", "lastName": "Bosley", "age": 49, "country": "Portugal", "detail": "Suite 7" },
    { "id": 69, "name": "Cordelia", "lastName": "Dmych", "age": 89, "country": "Czech Republic", "detail": "Suite 5" },
    { "id": 70, "name": "Gabie", "lastName": "Pennone", "age": 69, "country": "Indonesia", "detail": "Apt 1768" },
    { "id": 71, "name": "Verine", "lastName": "Alchin", "age": 12, "country": "Indonesia", "detail": "Room 1768" },
    { "id": 72, "name": "Loutitia", "lastName": "Harbisher", "age": 95, "country": "China", "detail": "Apt 1356" },
    { "id": 73, "name": "Perceval", "lastName": "Forryan", "age": 21, "country": "China", "detail": "Room 85" },
    { "id": 74, "name": "Fransisco", "lastName": "Zarfati", "age": 7, "country": "Indonesia", "detail": "Suite 25" },
    { "id": 75, "name": "Elmo", "lastName": "Early", "age": 96, "country": "Uzbekistan", "detail": "Suite 56" },
    { "id": 76, "name": "Woody", "lastName": "Charman", "age": 31, "country": "China", "detail": "8th Floor" },
    { "id": 77, "name": "Myrtie", "lastName": "Stembridge", "age": 10, "country": "China", "detail": "PO Box 69859" },
    { "id": 78, "name": "Lenard", "lastName": "Nance", "age": 5, "country": "Russia", "detail": "13th Floor" },
    { "id": 79, "name": "Halimeda", "lastName": "Kayzer", "age": 29, "country": "Slovenia", "detail": "Apt 55" },
    { "id": 80, "name": "Dianna", "lastName": "Blaszczynski", "age": 83, "country": "Russia", "detail": "Room 1745" },
    { "id": 81, "name": "Agatha", "lastName": "Harburtson", "age": 83, "country": "Indonesia", "detail": "PO Box 91168" },
    { "id": 82, "name": "Yolanda", "lastName": "Grotty", "age": 2, "country": "China", "detail": "Suite 86" },
    { "id": 83, "name": "Zachary", "lastName": "Crowley", "age": 10, "country": "Indonesia", "detail": "PO Box 4573" },
    { "id": 84, "name": "Hort", "lastName": "Leggett", "age": 65, "country": "Poland", "detail": "Suite 79" },
    { "id": 85, "name": "Klement", "lastName": "Blaszkiewicz", "age": 55, "country": "Philippines", "detail": "Suite 37" },
    { "id": 86, "name": "Merle", "lastName": "Paffitt", "age": 26, "country": "United States", "detail": "5th Floor" },
    { "id": 87, "name": "Adara", "lastName": "Gulc", "age": 77, "country": "Armenia", "detail": "3rd Floor" },
    { "id": 88, "name": "Elianore", "lastName": "LAbbet", "age": 14, "country": "Tanzania", "detail": "Suite 97" },
    { "id": 89, "name": "Noll", "lastName": "Trayte", "age": 17, "country": "China", "detail": "Room 716" },
    { "id": 90, "name": "Trudy", "lastName": "Scotchmor", "age": 64, "country": "Haiti", "detail": "Apt 1013" },
    { "id": 91, "name": "Nedi", "lastName": "Coulling", "age": 4, "country": "Indonesia", "detail": "12th Floor" },
    { "id": 92, "name": "Errick", "lastName": "Minchi", "age": 69, "country": "Portugal", "detail": "Apt 144" },
    { "id": 93, "name": "Reinhard", "lastName": "Camamile", "age": 47, "country": "China", "detail": "Apt 1883" },
    { "id": 94, "name": "Donnamarie", "lastName": "Volkers", "age": 75, "country": "Greece", "detail": "PO Box 97313" },
    { "id": 95, "name": "Waylen", "lastName": "Gethyn", "age": 89, "country": "Indonesia", "detail": "Apt 1522" },
    { "id": 96, "name": "Marya", "lastName": "Fairfull", "age": 88, "country": "Indonesia", "detail": "Suite 15" },
    { "id": 97, "name": "Timotheus", "lastName": "Skeels", "age": 91, "country": "Philippines", "detail": "PO Box 2779" },
    { "id": 98, "name": "Silvio", "lastName": "Woltering", "age": 82, "country": "Malawi", "detail": "Suite 6" },
    { "id": 99, "name": "Trace", "lastName": "Abramovitch", "age": 87, "country": "China", "detail": "Apt 405" },
    { "id": 100, "name": "Chelsey", "lastName": "Matei", "age": 23, "country": "Indonesia", "detail": "Room 2" },
    { "id": 101, "name": "Whitney", "lastName": "Skitterel", "age": 43, "country": "Madagascar", "detail": "Suite 54" },
    { "id": 102, "name": "Francesco", "lastName": "Nutkins", "age": 25, "country": "Poland", "detail": "Suite 15" },
    { "id": 103, "name": "Carol", "lastName": "Gilliland", "age": 22, "country": "Albania", "detail": "PO Box 34893" },
    { "id": 104, "name": "Tab", "lastName": "Fairhead", "age": 83, "country": "Portugal", "detail": "5th Floor" },
    { "id": 105, "name": "Reinaldos", "lastName": "Bowich", "age": 73, "country": "China", "detail": "PO Box 98742" },
    { "id": 106, "name": "Clemmy", "lastName": "Beccero", "age": 39, "country": "Indonesia", "detail": "Suite 21" },
    { "id": 107, "name": "Dominica", "lastName": "Blasetti", "age": 21, "country": "Russia", "detail": "2nd Floor" },
    { "id": 108, "name": "Myra", "lastName": "Wombwell", "age": 63, "country": "Mexico", "detail": "PO Box 61838" },
    { "id": 109, "name": "Conroy", "lastName": "Birchenough", "age": 73, "country": "China", "detail": "PO Box 52933" },
    { "id": 110, "name": "Francoise", "lastName": "Arguile", "age": 12, "country": "Peru", "detail": "Room 815" },
    { "id": 111, "name": "Luciano", "lastName": "Strang", "age": 53, "country": "Israel", "detail": "13th Floor" },
    { "id": 112, "name": "Aurelie", "lastName": "Ricardou", "age": 20, "country": "Russia", "detail": "Suite 66" },
    { "id": 113, "name": "Crista", "lastName": "Pardal", "age": 51, "country": "Argentina", "detail": "Apt 547" },
    { "id": 114, "name": "Piotr", "lastName": "Bonhill", "age": 50, "country": "Kazakhstan", "detail": "15th Floor" },
    { "id": 115, "name": "Elisabetta", "lastName": "Gamlin", "age": 95, "country": "China", "detail": "Suite 49" },
    { "id": 116, "name": "Luther", "lastName": "Anstis", "age": 87, "country": "Brazil", "detail": "Apt 1468" },
    { "id": 117, "name": "Chuck", "lastName": "Goodlad", "age": 63, "country": "Japan", "detail": "6th Floor" },
    { "id": 118, "name": "Ignazio", "lastName": "Bage", "age": 6, "country": "Poland", "detail": "Apt 123" },
    { "id": 119, "name": "Dory", "lastName": "Panswick", "age": 52, "country": "Thailand", "detail": "5th Floor" },
    { "id": 120, "name": "Gianni", "lastName": "Burvill", "age": 55, "country": "Nigeria", "detail": "Suite 36" },
    { "id": 121, "name": "Charlene", "lastName": "Stenson", "age": 75, "country": "Greece", "detail": "16th Floor" },
    { "id": 122, "name": "Annie", "lastName": "Drinnan", "age": 85, "country": "Indonesia", "detail": "Suite 28" },
    { "id": 123, "name": "Tarrah", "lastName": "Kowalik", "age": 44, "country": "China", "detail": "Suite 42" },
    { "id": 124, "name": "Sandie", "lastName": "Belsham", "age": 37, "country": "China", "detail": "Suite 71" },
    { "id": 125, "name": "Catina", "lastName": "Troman", "age": 44, "country": "Poland", "detail": "Suite 7" },
    { "id": 126, "name": "Krissie", "lastName": "Amery", "age": 95, "country": "Kenya", "detail": "Room 1641" },
    { "id": 127, "name": "Stephan", "lastName": "Frayn", "age": 22, "country": "Indonesia", "detail": "Suite 12" },
    { "id": 128, "name": "Barrett", "lastName": "Cremin", "age": 23, "country": "Argentina", "detail": "Apt 189" },
    { "id": 129, "name": "Yardley", "lastName": "Dollard", "age": 13, "country": "Indonesia", "detail": "Apt 328" },
    { "id": 130, "name": "Helga", "lastName": "Ierland", "age": 24, "country": "Poland", "detail": "Room 1434" },
    { "id": 131, "name": "Zaccaria", "lastName": "Wetton", "age": 83, "country": "Guatemala", "detail": "Apt 1477" },
    { "id": 132, "name": "Shandra", "lastName": "Honeyghan", "age": 71, "country": "China", "detail": "14th Floor" },
    { "id": 133, "name": "Lana", "lastName": "Stangoe", "age": 41, "country": "Lithuania", "detail": "PO Box 291" },
    { "id": 134, "name": "Jeffrey", "lastName": "Martynka", "age": 50, "country": "Indonesia", "detail": "19th Floor" },
    { "id": 135, "name": "Archibold", "lastName": "Agirre", "age": 58, "country": "Brazil", "detail": "Suite 32" },
    { "id": 136, "name": "Sanford", "lastName": "Shillinglaw", "age": 14, "country": "Gambia", "detail": "8th Floor" },
    { "id": 137, "name": "Ailyn", "lastName": "Rowbrey", "age": 99, "country": "France", "detail": "PO Box 49128" },
    { "id": 138, "name": "Brook", "lastName": "Tomasi", "age": 6, "country": "China", "detail": "Suite 65" },
    { "id": 139, "name": "Dalenna", "lastName": "Girodon", "age": 38, "country": "Brazil", "detail": "PO Box 96638" },
    { "id": 140, "name": "Liana", "lastName": "Rapson", "age": 28, "country": "Greece", "detail": "Apt 1230" },
    { "id": 141, "name": "Opalina", "lastName": "Sheilds", "age": 64, "country": "China", "detail": "Suite 96" },
    { "id": 142, "name": "Matilde", "lastName": "Speek", "age": 25, "country": "Philippines", "detail": "Apt 524" },
    { "id": 143, "name": "Webb", "lastName": "Wyllcocks", "age": 42, "country": "Poland", "detail": "Apt 410" },
    { "id": 144, "name": "Larine", "lastName": "Jenno", "age": 82, "country": "China", "detail": "8th Floor" },
    { "id": 145, "name": "Bernarr", "lastName": "Davy", "age": 24, "country": "Venezuela", "detail": "20th Floor" },
    { "id": 146, "name": "Wallace", "lastName": "Bent", "age": 10, "country": "Sweden", "detail": "Apt 169" },
    { "id": 147, "name": "Edik", "lastName": "Dorgan", "age": 17, "country": "United States", "detail": "PO Box 43156" },
    { "id": 148, "name": "Wait", "lastName": "Kristoffersson", "age": 68, "country": "Uganda", "detail": "Room 1970" },
    { "id": 149, "name": "Tadeas", "lastName": "Billham", "age": 9, "country": "Russia", "detail": "PO Box 50830" },
    { "id": 150, "name": "Revkah", "lastName": "Kupisz", "age": 94, "country": "Malaysia", "detail": "Apt 1131" },
    { "id": 151, "name": "Kelsey", "lastName": "Lohoar", "age": 96, "country": "China", "detail": "Suite 18" },
    { "id": 152, "name": "Regine", "lastName": "Yannikov", "age": 94, "country": "Japan", "detail": "Room 1381" },
    { "id": 153, "name": "Ula", "lastName": "Darter", "age": 95, "country": "Ukraine", "detail": "Apt 1572" },
    { "id": 154, "name": "Curtice", "lastName": "Aldiss", "age": 65, "country": "Indonesia", "detail": "Apt 1409" },
    { "id": 155, "name": "Cleon", "lastName": "Warmisham", "age": 77, "country": "Venezuela", "detail": "PO Box 37399" },
    { "id": 156, "name": "Kariotta", "lastName": "Banck", "age": 47, "country": "China", "detail": "Apt 257" },
    { "id": 157, "name": "Leelah", "lastName": "Ochiltree", "age": 95, "country": "Philippines", "detail": "PO Box 51640" },
    { "id": 158, "name": "Pru", "lastName": "Storry", "age": 6, "country": "Colombia", "detail": "17th Floor" },
    { "id": 159, "name": "Lucille", "lastName": "Kilfedder", "age": 30, "country": "Portugal", "detail": "10th Floor" },
    { "id": 160, "name": "Inger", "lastName": "Dusey", "age": 4, "country": "Bonaire, Saint Eustatius and Saba ", "detail": "Apt 1726" },
    { "id": 161, "name": "Harland", "lastName": "Grennan", "age": 82, "country": "New Zealand", "detail": "Apt 1932" },
    { "id": 162, "name": "Wallache", "lastName": "Clendennen", "age": 32, "country": "Poland", "detail": "Apt 511" },
    { "id": 163, "name": "Frankie", "lastName": "De Mico", "age": 66, "country": "Portugal", "detail": "4th Floor" },
    { "id": 164, "name": "Nannie", "lastName": "Durn", "age": 31, "country": "Indonesia", "detail": "Room 202" },
    { "id": 165, "name": "Arabela", "lastName": "Oakeby", "age": 19, "country": "China", "detail": "Suite 39" },
    { "id": 166, "name": "Caddric", "lastName": "Hyndson", "age": 49, "country": "Ukraine", "detail": "Apt 1077" },
    { "id": 167, "name": "Lavinie", "lastName": "Suggate", "age": 42, "country": "China", "detail": "PO Box 45443" },
    { "id": 168, "name": "Mirabella", "lastName": "Ainsbury", "age": 68, "country": "Brazil", "detail": "Apt 1540" },
    { "id": 169, "name": "Karoline", "lastName": "McVeagh", "age": 49, "country": "Botswana", "detail": "PO Box 4652" },
    { "id": 170, "name": "Gaby", "lastName": "Yuryshev", "age": 59, "country": "Ukraine", "detail": "Room 1503" },
    { "id": 171, "name": "Harrie", "lastName": "Greson", "age": 25, "country": "Russia", "detail": "Apt 336" },
    { "id": 172, "name": "Lynett", "lastName": "Gehrtz", "age": 23, "country": "New Zealand", "detail": "15th Floor" },
    { "id": 173, "name": "Nial", "lastName": "Wooder", "age": 84, "country": "Kenya", "detail": "PO Box 23084" },
    { "id": 174, "name": "Devlin", "lastName": "Doughtery", "age": 47, "country": "Cyprus", "detail": "Apt 1016" },
    { "id": 175, "name": "Kassey", "lastName": "Mapp", "age": 41, "country": "China", "detail": "Room 406" },
    { "id": 176, "name": "Elenore", "lastName": "Batten", "age": 20, "country": "China", "detail": "PO Box 57562" },
    { "id": 177, "name": "Carissa", "lastName": "Smithson", "age": 49, "country": "Ukraine", "detail": "Apt 1601" },
    { "id": 178, "name": "Alayne", "lastName": "Dasent", "age": 31, "country": "Russia", "detail": "17th Floor" },
    { "id": 179, "name": "Catherina", "lastName": "Espinho", "age": 90, "country": "Nicaragua", "detail": "19th Floor" },
    { "id": 180, "name": "Henka", "lastName": "Mattschas", "age": 28, "country": "Philippines", "detail": "10th Floor" },
    { "id": 181, "name": "David", "lastName": "Batchan", "age": 80, "country": "France", "detail": "19th Floor" },
    { "id": 182, "name": "Anastassia", "lastName": "Huddleston", "age": 1, "country": "Germany", "detail": "Suite 24" },
    { "id": 183, "name": "Quill", "lastName": "Bockmaster", "age": 13, "country": "Vietnam", "detail": "Room 1401" },
    { "id": 184, "name": "Roxana", "lastName": "Frankom", "age": 7, "country": "France", "detail": "Suite 75" },
    { "id": 185, "name": "Filip", "lastName": "Acres", "age": 29, "country": "Egypt", "detail": "Apt 1461" },
    { "id": 186, "name": "Ginelle", "lastName": "Purvey", "age": 50, "country": "France", "detail": "Suite 13" },
    { "id": 187, "name": "Edeline", "lastName": "Topley", "age": 6, "country": "Indonesia", "detail": "Room 1816" },
    { "id": 188, "name": "Khalil", "lastName": "Clell", "age": 51, "country": "New Caledonia", "detail": "Apt 540" },
    { "id": 189, "name": "Erika", "lastName": "Caldron", "age": 72, "country": "Guatemala", "detail": "Apt 1608" },
    { "id": 190, "name": "Bridgette", "lastName": "Schirach", "age": 58, "country": "Luxembourg", "detail": "Room 1468" },
    { "id": 191, "name": "Carri", "lastName": "Masterman", "age": 86, "country": "China", "detail": "Room 1066" },
    { "id": 192, "name": "Raye", "lastName": "Gissop", "age": 58, "country": "Ethiopia", "detail": "PO Box 67859" },
    { "id": 193, "name": "Cesar", "lastName": "Bille", "age": 56, "country": "Poland", "detail": "Room 858" },
    { "id": 194, "name": "Gilberta", "lastName": "Petruskevich", "age": 41, "country": "China", "detail": "Suite 79" },
    { "id": 195, "name": "Austine", "lastName": "Cookman", "age": 38, "country": "China", "detail": "20th Floor" },
    { "id": 196, "name": "Danica", "lastName": "Petofi", "age": 43, "country": "Japan", "detail": "PO Box 9680" },
    { "id": 197, "name": "Winonah", "lastName": "Nice", "age": 94, "country": "Poland", "detail": "Room 1602" },
    { "id": 198, "name": "Karrah", "lastName": "Getten", "age": 10, "country": "Portugal", "detail": "11th Floor" },
    { "id": 199, "name": "Armin", "lastName": "Dupey", "age": 93, "country": "Malaysia", "detail": "11th Floor" },
    { "id": 200, "name": "Yettie", "lastName": "Feeley", "age": 52, "country": "Canada", "detail": "Apt 654" }]
    const [customers, setCustomers] = useState([...mock]);
    const [filters, setFilters] = useState({
        name: { value: null, matchMode: FilterMatchMode.CONTAINS },
        lastName: { value: null, matchMode: FilterMatchMode.CONTAINS },
        age: { value: null, matchMode: FilterMatchMode.CONTAINS },
        country: { value: null, matchMode: FilterMatchMode.CONTAINS },
        detail: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });


    return (
        <div className="card">
            <DataTable value={customers} paginator rows={200} dataKey="id" filters={filters} filterDisplay="row" 
                globalFilterFields={['name', 'lastName', 'age', 'country', 'detail']} emptyMessage="No customers found.">
                <Column field="name" header="Name" filter />
                <Column field="lastName" header="Last name" filter />
                <Column field="age" header="Age" filter />
                <Column field="country" header="Country" filter />
                <Column field="detail" header="Detail" filter />
            </DataTable>
        </div>
    )
}

export default Page
