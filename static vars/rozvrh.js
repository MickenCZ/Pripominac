const rozvrh = {
    "1V":{
        "monday":[["Č"],["M"],["A Sk", "A Sl"],["F"],["D"],null, null, null, null],
        "tuesday":[["B"],["M", "Č"],["Č","M"],["A Sk", "A Sl"],["OV"],["Z"],null, null, null],
        "wednesday":[["A Sk", "Inf"],["Č"],["HV"],["A Sl", "Inf"],["M"],["DV", "Ppr", "RI"],null, null, null],
        "thursday":[["TV Tr", "Tv Ds"],["TV Tr", "Tv Ds"],["A Sk", "A Sl"],["Z"],["B"],["F"],null, null, null],
        "friday":[["D"],["VV"],["VV"],["M", "Č"],["Č","M"],["TV Sk", "TV Tr"],null, null, null]
    },
    "2V":{
        "monday":[["A Sl", "Inf"],["A Sk", "Inf"],["M"],["Č"],["HV"],["OV"],null, null, null],
        "tuesday":[["VV"],["VV"],["Č"],["F"],["Z"],null, null, null, null],
        "wednesday":[["M"],["Č"],["A Sl", "A Sk"],["B"],["D"],null, null, null, null],
        "thursday":[["Č", "M"],["M", "Č"],["F"],["A Sl", "A Sk"],["D"],["TV Ds", "TV Tr"],["TV Ds", "TV Tr"],null, null],
        "friday":[["Ppr", "DV", "RI"],["Z"],["A Sl", "A Sk"],["B"],["M"],null,["TV Sk", "TV Tr"],null, null]
    },
    "3V":{
        "monday":[["CH"],["Č"],["D"],["B"],["M"],["A Sk", "A Mi"],["Z"],null, null],
        "tuesday":[["Č"],["M"],["VV"],["A Mi", "Inf"],["Fj", "N Ja", "R"],["HV"],["A Sk", "Inf"],null, null],
        "wednesday":[["CH"],["Fj", "N Ja", "R"],["M", "Č"],["Č", "M"],["F"],["Z"],null, null, null],
        "thursday":[["OV"],["A Mi", "A Sk"],["Č"],["M"],["B"],["D"],null, null, null],
        "friday":[["TV Tr", "TV Md"],["TV Tr", "TV Md"],["DV", "Ppr"],["A Mi", "A Sk"],["F"],["Fj", "N Ja", "R"],null, null, null]
    },
    "4V":{
        "monday":[["A Sm", "A Mt"],["M"],["Č"],["CH"],["OV"],["Z"],["F"],null, null],
        "tuesday":[["M"],["A Sm", "A Mt"],["Fj", "N"],["B"],["TV Lg", "TV Sa"],["TV Lg", "TV Sa"],null, null, null],
        "wednesday":[["F"],["M"],["Č"],["Fj", "N"],["D"],["D"],["CH"],null, null],
        "thursday":[["Č", "M"],["M", "Č"],["Z"],["A Mt", "Inf"],["Inf", "A Sm"],["HV"],["VV"],null, null],
        "friday":[["Fj", "N"],["DV", "Ppr"],["Č"],["B"],["A Sm", "A Mt"],null, null, null, null]
    },
    "5V":{
        "monday":[["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"]],
        "tuesday":[["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"]],
        "wednesday":[["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"]],
        "thursday":[["M"],["M"],["M"],["M"],["CH"],["M"],["M"],["M"],["M"]],
        "friday":[["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"]]
    },
    "6V":{
        "monday":[["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"]],
        "tuesday":[["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"]],
        "wednesday":[["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"]],
        "thursday":[["M"],["M"],["M"],["M"],["CH"],["M"],["M"],["M"],["M"]],
        "friday":[["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"]]
    },
    "7V":{
        "monday":[["SM", "SA"],["SM", "SA"],["M", "Č"],["Č","M"],["ZSV"],["Fj", "R", "N Ja", "N Md"],null,["SCH", "SVS", "SZ"],["SCH", "SVS", "SZ"]],
        "tuesday":[["SB"],["SB"],["M"],["Fj", "R", "N Ja", "N Md"],["B"],["A Mt", "A Sl", "A Mi"],null,["TV Sa", "TV Tr"],["TV Sa", "TV Tr"]],
        "wednesday":[["D"],["CH"],["F"],["M"],["A Mt", "A Sl", "A Mi"],["Č"],["ZSV"],null, null],
        "thursday":[["SD", "SF", "SI", "SN", "SČ"],["SD", "SF", "SI", "SN", "SČ"],["Fj", "R", "N Ja", "N Md"],["Č"],["A Mt", "A Sl", "A Mi"],["Inf Hr", "Inf Ze"],null, null, null],
        "friday":[["A Mt", "A Sl", "A Mi"],["CH"],["Č"],["D"],["B"],["M"],["F"],null, null]
    },
    "8V":{
        "monday":[["SCH", "SM", "SVS"],["SCH", "SM", "SVS"],["M"],["N Ja", "N Ho", "Fj", "R"],["B"],["A Sl", "A Mt", "A Sm", "A Kn"],null,["SČ", "SVV", "SZ"],["SČ", "SVV", "SZ"]],
        "tuesday":[["SA", "SB", "SRj", "SFj"],["SA", "SB", "SRj", "SFj"],["CH"],["Z"],["Č"],["Inf Ho", "Inf Ze"],["D"],null,null],
        "wednesday":[["TV Lo", "TV Tr"],["TV Lo", "TV Tr"],["Č", "M"],["M", "Č"],["ZSV"],["F"],["A Sl", "A Mt", "A Sm", "A Kn"],null,null],
        "thursday":[["SD", "SF", "SI", "SN"],["SD", "SF", "SI", "SN"],["M"],["N Ja", "N Ho", "Fj", "R"],["Z"],["Č"],["A Sl", "A Mt", "A Sm", "A Kn"],null, null],
        "friday":[["Č"],["N Ja", "N Ho", "Fj", "R"],["M"],["A Sl", "A Mt", "A Sm", "A Kn"],["B"],["D"],["ZSV"],null,null]
    },
    "1A":{
        "monday":[["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"]],
        "tuesday":[["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"]],
        "wednesday":[["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"]],
        "thursday":[["M"],["M"],["M"],["M"],["CH"],["M"],["M"],["M"],["M"]],
        "friday":[["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"]]
    },
    "2A":{
        "monday":[["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"]],
        "tuesday":[["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"]],
        "wednesday":[["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"]],
        "thursday":[["M"],["M"],["M"],["M"],["CH"],["M"],["M"],["M"],["M"]],
        "friday":[["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"],["M"]]
    },
    "3A":{
        "monday":[["SM", "SA"],["SM", "SA"],["F"],["M"],["D"],["Fj", "R", "N Md", "N Ja"],null,["SCH", "SVS", "SZ"],["SCH", "SVS", "SZ"]],
        "tuesday":[["SB", "SFj"],["SB", "SFj"],["Č","M"],["Fj", "R", "N Md", "N Ja"],["M", "Č"],["A Mt", "A Sl", "A Mi"],null,["TV Vo", "TV Sa"],["TV Vo", "TV Sa"]],
        "wednesday":[["Č"],["ZSV"],["CH"],["D"],["A Mt", "A Sl", "A Mi"],["B"],["Inf Hr", "Inf Ze"],null, null],
        "thursday":[["SČ", "SD", "SI"],["SČ", "SD", "SI"],["Fj", "R", "N Md", "N Ja"],["M"],["A Mt", "A Sl", "A Mi"],["Č"],null, null, null],
        "friday":[["A Mt", "A Sl", "A Mi"],["Č"],["CH"],["F"],["ZSV"],["B"],["M"],null, null]
    },
    "4A":{
        "monday":[["SCH", "SM", "SVS"],["SCH", "SM", "SVS"],["B"],["N Ja", "N Ho", "Fj", "R"],["F"],["A Sl", "A Mt", "A Sm", "A Kn"],null,["SČ", "SVV", "SZ"],["SČ", "SVV", "SZ"]],
        "tuesday":[["SA", "SB", "SRj", "SFj"],["SA", "SB", "SRj", "SFj"],["ZSV"],["D"],["M"],["Č"],["Z"],null, null],
        "wednesday":[["TV Lo", "TV Tr"],["TV Lo", "TV Tr"],["Inf Ho", "Inf Ze"],["B"],["Č"],["M"],["A Sl", "A Mt", "A Sm", "A Kn"],null, null],
        "thursday":[["SD", "SF", "SN"],["SD", "SF", "SN"],["Č", "M"],["N Ja", "N Ho", "Fj", "R"],["M", "Č"],["Z"],["A Sl", "A Mt", "A Sm", "A Kn"],null, null],
        "friday":[["CH"],["N Ja", "N Ho", "Fj", "R"],["M"],["A Sl", "A Mt", "A Sm", "A Kn"],["Č"],["ZSV"],["D"],null, null]
    }
}

export default rozvrh