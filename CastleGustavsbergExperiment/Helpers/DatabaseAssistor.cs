using System;
using System.Data;
using System.Data.SqlClient;

namespace CastleGustavsbergExperiment.Helpers
{
    public static class DatabaseAssistor
    {
        // Passing a string with sql is terrible. We should not do this, but this is just for demo purposes.
        public static DataSet GetRequest(string sql)
        {
            SqlConnection connection;
            var connectionString = "Data Source=localhost\\SQLEXPRESS;Initial Catalog=model;Integrated Security=SSPI;";
            connection = new SqlConnection(connectionString);
            var dataSet = new DataSet();

            try
            {
                connection.Open();

                var command = new SqlCommand(sql, connection);
                var adapter = new SqlDataAdapter(command);
                adapter.Fill(dataSet);

                connection.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return dataSet;
        }
    }
}
