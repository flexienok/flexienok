<template>
  <v-col cols="3" >
    <v-card dark justify-center>
      <v-content>
        <v-container
            fluid
            fill-height
          >
          <v-form cols="2"
            ref="form"
            lazy-validation
          >
            <v-text-field
              v-model="CourseID"
              label="CourseID"
              required
            ></v-text-field>

            <v-text-field
              v-model="AssignmentID"
              label="AssignmentID"
              required
            ></v-text-field>
    
            <v-text-field
              v-model="AutherizationID"
              label="AutherizationID"
              required
            ></v-text-field>

            <v-btn
              color="success"
              class="mr-4"
              @click="validate"
            >
              Get answer
            </v-btn>
          </v-form>
        </v-container>
      </v-content>
    </v-card>
  </v-col>
</template>

<script>
import axios from 'axios'

var baseurl =  "https://nokflex-api.nok.se/api/v2/assignment/solution/"
  export default {
    name: "infoinput",
    data: () => ({
      CourseID: '',
      AssignmentID: '',
      AutherizationID: '',
    }),

    methods: {
      validate () {
        
        var url = baseurl + this.AssignmentID + "?courseId=" + this.CourseID;
        var headers = {
          "authorization" : "Bearer " + this.AutherizationID
        };
        var i = 0;

        axios.get(url, {headers : headers}, ).then(function (response) {
          console.log(response.data.solution)
          console.log(response.data.solution.length) 
          for (i = 0; i < response.data.solution.length; i++){
            console.log(response.data.solution[i])
            console.log(i)
          }
        }).catch(error => {
          console.log(error.response)
          // console.log(headers)
        });
        
      },
    },
  }
</script>