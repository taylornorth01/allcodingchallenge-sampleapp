from database_helper import Database



class StatsHelper():

    def __init__(self):
        self.database = Database()
        print("Stats Helping initialising!")

    def select_all_employee(self):
        result = self.database.fetch_all("SELECT * FROM employeedata")
        return result

    def select_all_pag(self, amount, page):
        result = self.database.fetch_all(f"SELECT * FROM dayroutine LIMIT {amount} OFFSET {amount * page}")
        return result

    def join_all(self):
        result = self.database.fetch_all("SELECT * FROM dayroutine as a left join employeedata b on a.employee_id = b.employee_id")
        return result

    def asc_exercise(self):
        result = self.database.fetch_all("SELECT * FROM dayroutine ORDER BY exercise_time ASC")
        return result


    # EXERCISE PAGINATION
    def desc_exercise_pag(self, amount, page):
        result = self.database.fetch_all(f"SELECT * FROM dayroutine ORDER BY exercise_time DESC LIMIT {amount} OFFSET {amount * page}")
        return result

    def asc_exercise_pag(self, amount, page):
        result = self.database.fetch_all(f"SELECT * FROM dayroutine ORDER BY exercise_time ASC LIMIT {amount} OFFSET {amount * page}")
        return result

    
    # SLEEP PAGINATION 
    def desc_sleep_pag(self, amount, page):
        result = self.database.fetch_all(f"SELECT * FROM dayroutine ORDER BY sleep_time DESC LIMIT {amount} OFFSET {amount * page}")
        return result

    def asc_sleep_pag(self, amount, page):
        result = self.database.fetch_all(f"SELECT * FROM dayroutine ORDER BY sleep_time ASC LIMIT {amount} OFFSET {amount * page}")
        return result


    # SOCIAL PAGINATION 
    def desc_social_pag(self, amount, page):
        result = self.database.fetch_all(f"SELECT * FROM dayroutine ORDER BY social_interaction_time DESC LIMIT {amount} OFFSET {amount * page}")
        return result

    def asc_social_pag(self, amount, page):
        result = self.database.fetch_all(f"SELECT * FROM dayroutine ORDER BY social_interaction_time ASC LIMIT {amount} OFFSET {amount * page}")
        return result

    
    # WORK PAGINATION 
    def desc_work_pag(self, amount, page):
        result = self.database.fetch_all(f"SELECT * FROM dayroutine ORDER BY work_time DESC LIMIT {amount} OFFSET {amount * page}")
        return result

    def asc_work_pag(self, amount, page):
        result = self.database.fetch_all(f"SELECT * FROM dayroutine ORDER BY work_time ASC LIMIT {amount} OFFSET {amount * page}")
        return result


    def desc_exercise(self):
        result = self.database.fetch_all(f"SELECT * FROM dayroutine ORDER BY exercise_time DESC")
        return result

    

    def total_records(self):
        result = self.database.fetch_all("SELECT * FROM dayroutine")
        return len(result)
    

    # HINT: You can define more queries here, along with some python logic to calculate!
    def calculate_another_stat(self):
      # all_rows = self.database.fetch_all("")
      return None
