from django.contrib import admin
from .models import (ProblemCategory,
                     ProblemStatement,
                     HackathonTeam,
                     HackathonTiming)


class ProblemCategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'category', 'description')


class ProblemStatementAdmin(admin.ModelAdmin):
    list_display = ('id', 'category', 'statement')


class HackathonTeamAdmin(admin.ModelAdmin):
    list_display = ('id', 'team_name', 'college_name')


class HackathonTimingAdmin(admin.ModelAdmin):
    list_display = ('id', 'registration_time')


admin.site.register(ProblemCategory, ProblemCategoryAdmin)
admin.site.register(ProblemStatement, ProblemStatementAdmin)
admin.site.register(HackathonTeam, HackathonTeamAdmin)
admin.site.register(HackathonTiming, HackathonTimingAdmin)
