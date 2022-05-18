<template>
  <v-data-table
    :headers="headers"
    :items="topics"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
      
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Deck
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Topic"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-btn
      rounded
      color = 'success'
        @click="editItem(item)"
      >
        <router-link to="/test">Test</router-link> |
      </v-btn>
      <v-btn
      rounded
      color = 'primary'
      style="margin: 10px; "
        @click="editItem(item)"
      >
        EDIT
      </v-btn>
      <v-btn
      color="error"
      rounded
        style="margin: 10px; "
        @click="deleteItem(item)"
      >
        DELETE
      </v-btn>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: "Topics",
          align: "start",
          sortable: false,
          value: "name",
        },

        { text: "Actions", value: "actions", sortable: false },
      ],
      topics: [],
      editedIndex: -1,
      editedItem: {
        name: "",

      },
      defaultItem: {
        name: "",
        
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? "New Item" : "Edit Item";
      },
    },

    watch: {
      dialog (val) {
        val || this.close();
      },
      dialogDelete (val) {
        val || this.closeDelete();
      },
    },

    created () {
      this.initialize();
    },

    methods: {
      initialize () {
        this.topics = [
          {
            name: "YangChuannomretry",

          },
          {
            name: "Jansonomics",

          },
          {
            name: "Aiden Hypothesis",

          },
          {
            name: "Jerryl Theroem",

          },
          
        ];
      },

      editItem (item) {
        this.editedIndex = this.topics.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      },

      deleteItem (item) {
        this.editedIndex = this.topics.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialogDelete = true;
      },

      deleteItemConfirm () {
        this.topics.splice(this.editedIndex, 1);
        this.closeDelete();
      },

      close () {
        this.dialog = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },

      closeDelete () {
        this.dialogDelete = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.topics[this.editedIndex], this.editedItem);
        } else {
          this.topics.push(this.editedItem);
        }
        this.close();
      },
    },
  };
</script>