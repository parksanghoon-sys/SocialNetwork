using Microsoft.AspNetCore.Mvc;
using Persistence;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class ActivitiesController(AppDbContext context) : BaseApiController
{
    /// <summary>
    /// 웹서버의 스레드가 많으 요청시에는 에러를 발생시킬수 있다. 503 에러
    /// HTTP 요청이들어오면 스레드가 하나 할당되거 결과를 반환한다.
    /// async await 비동기 방식으로 처리하면 스레드를 반납하고 다른 요청을 처리할수 있다.
    /// DB에서 데이터를 가져오는 동안 스레드를 반납하고 다른 요청을 처리할
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        return await context.Activities.ToListAsync();
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivity(string id)
    {
        var activity = await context.Activities.FindAsync(id);

        if (activity == null) return NotFound();
        
        return activity;
    }
}