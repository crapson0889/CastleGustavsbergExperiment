using CastleGustavsbergExperiment.Helpers;
using CastleGustavsbergExperiment.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace CastleGustavsbergExperiment.Controllers
{
    [Route("api/[controller]")]
    public class TaskController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Task> Tasks()
        {
            var dataSet = DatabaseAssistor.GetRequest("select * from Task");

            var tasks = new List<Task>();

            for (var i = 0; i < dataSet.Tables[0].Rows.Count; i++)
            {
                tasks.Add(new Task
                {
                    Id = Convert.ToInt32(dataSet.Tables[0].Rows[i]["Id"]),
                    Subject = Convert.ToString(dataSet.Tables[0].Rows[i]["Subject"]),
                });
            }

            return tasks;
        }

        [HttpGet("[action]/{id}")]
        public Task Task(int id)
        {
            var dataSet = DatabaseAssistor.GetRequest($"select * from Task where id = {id}");

            var task = new Task
            {
                Id = Convert.ToInt32(dataSet.Tables[0].Rows[0]["Id"]),
                Subject = Convert.ToString(dataSet.Tables[0].Rows[0]["Subject"])
            };

            return task;
        }
    }
}