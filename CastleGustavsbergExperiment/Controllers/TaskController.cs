using CastleGustavsbergExperiment.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace CastleGustavsbergExperiment.Controllers
{
    [Route("api/[controller]")]
    public class TaskController : Controller
    {
        private static string[] Subjects = new[]
        {
            "Complete Auth", "Call Member", "Complete Case", "Clinical Review", "MD Review", "Plan the Care", "Email Sarah Saylor", "Communication Record", "Create Task", "Send Letter"
        };

        [HttpGet("[action]")]
        public IEnumerable<Task> Tasks()
        {
            SqlConnection connection;
            var connectionString = "Data Source=localhost\\SQLEXPRESS;Initial Catalog=model;Integrated Security=SSPI;";
            connection = new SqlConnection(connectionString);
            var sql = "select * from Task";
            var dataSet = new DataSet();

            var tasks = new List<Task>();

            try
            {
                connection.Open();

                var command = new SqlCommand(sql, connection);
                var adapter = new SqlDataAdapter(command);
                adapter.Fill(dataSet);

                for (var i = 0; i < dataSet.Tables[0].Rows.Count; i++)
                {
                    tasks.Add(new Task
                    {
                        Id = Convert.ToInt32(dataSet.Tables[0].Rows[i]["Id"]),
                        Subject = Convert.ToString(dataSet.Tables[0].Rows[i]["Subject"]),
                    });
                }

                connection.Close();
            }
            catch (Exception ex)
            {
            }

            return tasks;
        }

        [HttpGet("[action]/{id}")]
        public Task Task(int id)
        {
            var rng = new Random();

            return new Task
            {
                Id = rng.Next(-20, 55),
                Subject = Subjects[rng.Next(Subjects.Length)]
            };
        }
    }
}