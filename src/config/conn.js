import {createClient} from "@supabase/supabase-js"
const SUPABASE_URL = 'https://kyspqmaezagkdwtvyzrr.supabase.co'  
const SUPABASE_ANON_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5c3BxbWFlemFna2R3dHZ5enJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5OTM5MDIsImV4cCI6MTk5NzU2OTkwMn0.CRg9SDoujs_bBJZUgsEWf_B5Y8WX2o9J-uyZpv-D1pM'

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
const test = () =>{
    console.log(supabase);
    console.log("hello");
}
test()

async function insertData(name){
    const {data:existingData,error}=await _supabase
    .from('table_name')
    .select('*')
    .eq('name',name)

    if(error)
    {
        console.log("errorrrr",error.message)
        return
    }
    if(existingData.length>0)
    {
        console.log("aksdj", existingData)
        return
    }
}


